FROM node:20-slim

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the port Vite uses
EXPOSE 5173

# Start Vite development server, allowing external connections
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]