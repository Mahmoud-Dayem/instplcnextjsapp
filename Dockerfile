# Use the official Node.js image as the base image
# docker build -t mahmouddayem/plcinstapp:0.1.6 .
# docker run -p 3000:3000 your-dockerhub-username/my-nextjs-app
# docker login
# docker tag mahmouddayem/plcinstapp mahmouddayem/plcinstapp:0.1.0
# docker push mahmouddayem/plcinstapp:0.1.6

# docker pull your-dockerhub-username/my-nextjs-app:latest
# docker run -p 3000:3000 your-dockerhub-username/my-nextjs-app:latest
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a smaller image for the final stage
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]