# VIDYA AI: Now self study hui asaan 🕮

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Google Cloud Platform](https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)

## Overview

Introducing Vidya AI, the game-changer in self-study for school students. Vidya AI harnesses the power of Vertex AI to create a personalized learning experience like never before. By simply uploading PDFs of schoolbooks, notes, and assignments, Vidya AI generates custom embeddings and leverages Google's advanced language model to tailor its functionality to each student's unique curriculum.

Here's how it works: Vidya AI acts as an intelligent chatbot and robust search engine, enabling students to easily navigate and comprehend their syllabus. Whether they're struggling to understand complex concepts or need help solving challenging numerical problems, Vidya AI is there to guide them every step of the way. 

This AI-powered tutor provides detailed explanations, offers step-by-step solutions, and adapts to the individual learning pace of each student, making difficult subjects more approachable and less intimidating. 

Imagine a study companion that never gets tired, is always ready to help, and can provide instant, accurate answers tailored to the exact material a student is studying. That's Vidya AI. By transforming how students interact with their learning materials, Vidya AI not only enhances comprehension and retention but also fosters a more engaging and interactive educational experience.

Say goodbye to frustration and confusion. With Vidya AI, mastering the syllabus is just a conversation away. Welcome to the future of education. Welcome to Vidya AI.

## Features

- **Personalized Learning**: Vidya AI utilizes advanced AI algorithms to analyze and understand each student's learning patterns, allowing it to tailor its recommendations and explanations to individual needs, ensuring maximum comprehension and retention.
- **Intelligent Search**: With Vidya AI's powerful search capabilities, students can quickly find relevant information within their study materials, saving time and effort while ensuring they stay focused on the topics that matter most.
- **Real-time Assistance**: Vidya AI acts as an always-available study buddy, providing instant assistance whenever students encounter difficulties or have questions, enabling them to overcome challenges and progress at their own pace.
- **Interactive Engagement**: Through its chatbot interface, Vidya AI engages students in interactive learning experiences, fostering curiosity, exploration, and deeper understanding of complex concepts beyond what traditional study methods can offer.
- **Secure Authentication**: Vidya AI prioritizes student privacy by offering secure authentication via Gmail, ensuring that personal data remains protected. By integrating with Gmail accounts, Vidya AI establishes a trusted connection, granting access to study materials while safeguarding sensitive information, thus providing students with peace of mind regarding their privacy and data security.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/),[Material UI](https://mui.com/material-ui/)
- **Backend**: [Node.js](https://nodejs.org/), [Express](https://expressjs.com/)
- **Containerization**: [Docker](https://www.docker.com/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)

## GCP Services
[Google Cloud Platform (GCP)](https://cloud.google.com/)

- **App Hosting**: Cloud Run for Serverless deployment.
- **Storage**: Cloud Storage bucket for storing PDF.
- **Authentication**: Cloud IAM for service user and oAuth2.0
- **AI**: Vertex AI agent, Dailogflow CX and API.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- GCP account (for GCP services)

### Set up the project

1. Clone the repository:

   ```bash
   git clone https://github.com/Innovation-Software-in-Sky/GCP-Hackathon-2024-vidyaai.git
   npm install

   ```

2. Set up the Environment

   ```bash
   export REACT_APP_CONFIG_ID="vertex ai search agent config id"
   export GOOGLE_CLOUD_PROJECT="gcp project id"
   export DIALOGFLOW_CX_LOCATION="project location e.g.global"
   export DIALOGFLOW_CX_AGENT_ID="dialogflow cx agent id"
   export DIALOGFLOW_CX_LANGUAGE_CODE="dialogflow cx language e.g. en"
   export PORT=8080
   export GOOGLE_CLIENT_ID="gcp client id"
   export GOOGLE_CLIENT_SECRET="gcp clent secret"

   ```

3. Build the App

   ```bash
   npm run bootstrap

   ```

4. Start the App
   ```bash
   npm run start

   ```

## References

- [Google Cloud Platform](https://cloud.google.com/)
- [Google Cloud Vertex AI Agent Builder Hackathon](https://googlevertexai.devpost.com/) 

## Technical Reads & Resources

- [Project Demo Video]()
- [Getting Started with GCP]()
- [Enablement of API & Services]()
- [Service User, IAM and OAuth]()
- [Cloud Storage Bucket]()
- [DialogFlow Cx, Vertex AI Agents]()
- [Agents Integration with 3rd party App]()
- [Cloud Run and 3rd party App deployment]()

## Contact

Join on [Discord](https://discord.gg/bX9qnBHM) and suggest any feature, give your feeedback and report any bug.