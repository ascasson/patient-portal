FROM node:22.15.0-bullseye

WORKDIR /app

# Install netcat for network checking
RUN apt-get update && apt-get install -y netcat-traditional && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and Prisma files
COPY . .

# Create a startup script
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

EXPOSE 3000

# Use the startup script as the container's entry point
CMD ["/app/start.sh"]