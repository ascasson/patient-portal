# Patient Reports Portal

A full-stack application for viewing and managing patient medical reports, built with Vue.js and Fastify.

## Project Structure

```
├── backend/          # Fastify TypeScript backend
├── client/          # Vue.js frontend
```

## Technology Stack

### Backend
- Fastify (TypeScript)
- Prisma ORM
- MySQL Database
- Docker

### Frontend
- Vue.js 3
- Vite
- Axios

## Prerequisites

- Node.js (version 20.0.0 or higher)
- npm (comes with Node.js)
- Docker and Docker Compose (for MySQL database)

## Getting Started

The easiest way to run the application is using Docker. Make sure Docker is installed.

# Start all services

```bash
cd backend
npm run docker:start
```

The application will be available at:
- Backend API: http://localhost:3000

### 2. Frontend Setup

In a new terminal, navigate to the client directory:
```bash
cd client
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## API Endpoints

- `GET /reports` - Fetch patient reports
  - Optional query parameter: `patientName` for filtering

## Project Features

- Real-time patient report filtering
- Cardiac event highlighting
- Responsive design
- REST API with TypeScript types
- Database persistence with mysql and Prisma ORM

## Notes

- The frontend expects the backend to be running at `http://localhost:3000`
- The backend requires a MySQL database (provided via Docker)
- Sample seed data includes CIED (Cardiac Implantable Electronic Device) and heart failure patient reports

