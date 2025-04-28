FROM node:20-slim

WORKDIR /app

# Install netcat for network checking
RUN apt-get update && apt-get install -y netcat-traditional && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and Prisma files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Create a startup script
COPY <<'EOF' /app/start.sh
#!/bin/sh
# Wait for MySQL to be ready
echo "Waiting for MySQL..."
while ! nc -z mysql 3306; do
  sleep 1
done

# Run migrations
echo "Running database migrations..."
npx prisma migrate deploy
npm run seed-demo

# Start the application
npm run dev
EOF

RUN chmod +x /app/start.sh

EXPOSE 3000

CMD ["/app/start.sh"]