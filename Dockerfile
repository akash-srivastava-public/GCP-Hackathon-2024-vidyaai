# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies for both vidyaai-ui and vidyaai-api
RUN npm install

# Copy vidyaai-ui and vidyaai-api code
COPY vidyaai-ui/ ./vidyaai-ui
COPY vidyaai-api/ ./vidyaai-api

# Build the vidyaai-ui
RUN npm run build:client

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
