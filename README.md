# 1-Build docker image  file is avaiable Dockerfile
            # Use the official Node.js image as the base image
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
   docker build -t mahmouddayem/plcinstapp:0.1.4

2-docker run -d -p3000:3000 mahmouddayem/plcinstapp:0.1.4

3-or after build it you can run /home/moh/plcInstProjct/nodejs mysql app yaml files/docker compose.yaml
  so that nodejs container can communicate to mysql in same pod
            services:
            nextjs-app:
                image: mahmouddayem/plcinstapp:0.1.3
                container_name: nextjs-app
                environment:
                - DB_HOST=mysql
                - DB_USER=root
                - DB_PASSWORD=ahli
                - DB_NAME=plcinstdb
                ports:
                - '3000:3000'

            mysql:
                image: mysql:8.0  # Use the official MySQL image
                container_name: mysql_container
                environment:
                MYSQL_ROOT_PASSWORD: ahli  # Root password
                MYSQL_DATABASE: plcinstdb         # Default database to create
                MYSQL_USER: eyad                 # Custodockm user
                MYSQL_PASSWORD: ahli         # Custom user password
                ports:
                - "3306:3306"  # Map port 3306 on the host to port 3306 on the container
                volumes:
                - /db/mydb:/var/lib/mysql  # Persist MySQL data to a volume   




 








This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
