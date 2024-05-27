"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dialogflow_cx_1 = require("@google-cloud/dialogflow-cx");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// Load environment variables from .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// Middleware to parse JSON requests
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Dialogflow CX configuration
const projectId = process.env.GOOGLE_CLOUD_PROJECT;
const location = process.env.DIALOGFLOW_CX_LOCATION;
const agentId = process.env.DIALOGFLOW_CX_AGENT_ID;
const languageCode = process.env.DIALOGFLOW_CX_LANGUAGE_CODE || "en";
const client = new dialogflow_cx_1.SessionsClient();
function detectIntentText(query) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const sessionId = Math.random().toString(36).substring(7);
        const sessionPath = client.projectLocationAgentSessionPath(projectId, location, agentId, sessionId);
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: query,
                },
                languageCode,
            },
        };
        const [response] = yield client.detectIntent(request);
        const result = {
            responseMessages: [],
            matchedIntent: null,
            currentPage: null,
        };
        for (const message of response.queryResult.responseMessages) {
            if (message.text) {
                result.responseMessages.push(message.text.text[0]);
            }
        }
        if ((_a = response.queryResult.match) === null || _a === void 0 ? void 0 : _a.intent) {
            result.matchedIntent = response.queryResult.match.intent.displayName;
            result.currentPage = response.queryResult.currentPage.displayName;
        }
        return result;
    });
}
app.post("/detect-intent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body.query;
    if (!query) {
        return res.status(400).send("Query text is required");
    }
    try {
        const result = yield detectIntentText(query);
        console.log(result.responseMessages[0]);
        res.json(result.responseMessages[0]);
    }
    catch (error) {
        console.error("Error detecting intent:", error);
        res.status(500).send("Error detecting intent");
    }
}));
// Serve static files from the React app
const clientBuildPath = path_1.default.join(__dirname, '../../vidyaai-ui/build');
app.use(express_1.default.static(clientBuildPath));
// Catchall handler to serve the React app
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(clientBuildPath, "index.html"));
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
