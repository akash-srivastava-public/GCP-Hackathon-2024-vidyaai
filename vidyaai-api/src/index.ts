import express, { Request, Response } from "express";
import { SessionsClient } from "@google-cloud/dialogflow-cx";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

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

app.post("/detect-intent", async (req: Request, res: Response) => {
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