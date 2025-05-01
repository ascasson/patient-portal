#!/bin/bash

# Wait for the database to be ready
echo "Waiting for the database to be ready..."
while ! nc -z mysql 3306; do
  sleep 1
done
echo "Database is ready!"

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

# Run Prisma migrations
echo "Running Prisma migrations..."
npx prisma migrate deploy

# Seed the database
echo "Seeding the database..."
npm run seed-demo

# Start the application
echo "Starting the application..."
npm run dev