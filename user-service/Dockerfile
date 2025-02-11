# Use Node.js LTS version
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the service port
EXPOSE 3001

# Start the service
CMD ["npm", "run", "start"]
