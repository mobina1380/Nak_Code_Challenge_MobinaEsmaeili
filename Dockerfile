# Use an official node image as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Install a simple web server to serve the built application
RUN npm install -g serve

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the application
CMD ["serve", "-s", "build", "-l", "5000"]
