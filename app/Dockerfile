# Official Base Image
FROM node:18-alpine

WORKDIR /app

# Static Site Copy 
COPY package*.json ./

# Install Depends
RUN npm install

# Copy Rest Project
COPY . .

# PORT Live:80
EXPOSE 3000

# Command Default (Inside Image for default)
CMD ["npm", "start"]