# Use the official Node.js image as the base image
FROM node:14

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3001
EXPOSE 3001

# Command to run your application
CMD npm run dev