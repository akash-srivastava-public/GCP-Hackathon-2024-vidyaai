# Use the official Node.js 14 image as base
FROM node:14 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Build client
WORKDIR /app/vidyaai-ui
RUN npm install
RUN npm run build

# Build server
WORKDIR /app/vidyaai-api
RUN npm install
RUN npm run build

# Switch back to root directory
WORKDIR /app

# Expose the port the app runs on
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
