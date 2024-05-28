import express, { Request, Response } from "express";
import { SessionsClient } from "@google-cloud/dialogflow-cx";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
const passport = require('passport');
const session = require('express-session');
import "./auth"

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(passport.initialize());
app.use(passport.session());

function checkloggedin(req:any,res:any,next:any){
  req.user ? next() : res.send(401);
}

// Dialogflow CX configuration
const projectId = process.env.GOOGLE_CLOUD_PROJECT!;
const location = process.env.DIALOGFLOW_CX_LOCATION!;
const agentId = process.env.DIALOGFLOW_CX_AGENT_ID!;
const languageCode = process.env.DIALOGFLOW_CX_LANGUAGE_CODE || "en";

const client = new SessionsClient();

interface DetectIntentResult {
  responseMessages: string[];
  matchedIntent: string | null;
  currentPage: string | null;
}

async function detectIntentText(query: string): Promise<DetectIntentResult> {
  const sessionId = Math.random().toString(36).substring(7);
  const sessionPath = client.projectLocationAgentSessionPath(
    projectId,
    location,
    agentId,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
      },
      languageCode,
    },
  };

  const [response]: any = await client.detectIntent(request);
  const result: DetectIntentResult = {
    responseMessages: [],
    matchedIntent: null,
    currentPage: null,
  };

  for (const message of response.queryResult.responseMessages) {
    if (message.text) {
      result.responseMessages.push(message.text.text[0]);
    }
  }

  if (response.queryResult.match?.intent) {
    result.matchedIntent = response.queryResult.match.intent.displayName;
    result.currentPage = response.queryResult.currentPage.displayName;
  }

  return result;
}

app.get('/auth/google',passport.authenticate('google',{
  scope:['email','profile']
}));

app.get('/auth/google/callback', passport.authenticate(
  'google', {
    successRedirect:"/",
    failureRedirect:"/login"
}));

app.get('/auth/user',checkloggedin, async (req: any, res: any) =>{
  res.json(req.user)
} )

app.use('/auth/logout', async(req:any,res,any)=>{
  req.session.destroy((err:any) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Error destroying session');
    } else {
      res.status(200).send('Successfully Logged Out');
    }
  });
})

app.post("/detect-intent",checkloggedin, async (req: Request, res: Response) => {
  const query = req.body.query;
  if (!query) {
    return res.status(400).send("Query text is required");
  }

  try {
    const result = await detectIntentText(query);
    console.log(result.responseMessages[0]);
    res.json(result.responseMessages[0]);
  } catch (error) {
    console.error("Error detecting intent:", error);
    res.status(500).send("Error detecting intent");
  }
});

// Serve static files from the React app
const clientBuildPath = path.join(__dirname, '../../vidyaai-ui/build');
app.use(express.static(clientBuildPath));

// Catchall handler to serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
