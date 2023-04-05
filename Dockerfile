# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]
