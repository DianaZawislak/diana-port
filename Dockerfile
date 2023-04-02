FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Set the environment variables
ENV NODE_ENV production

# Expose the port that the application will listen on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
