# Docker Setup Instructions

This project is fully containerized with Docker and Docker Compose, including:
- **Frontend**: React/Vite application (port 4000)
- **Backend**: Express/Node.js API (port 3001)
- **Database**: MongoDB (port 27017)

## Prerequisites

- Docker Desktop installed
- Docker Compose installed

## Quick Start

1. **Clone the repository** (if not already done)

2. **Start all services**:
   ```bash
   docker-compose up --build
   ```

3. **Access the application**:
   - Frontend: http://localhost:4000
   - Backend API: http://localhost:3001
   - MongoDB: localhost:27017

## Development Commands

### Start services in development mode:
```bash
docker-compose up
```

### Start services in background:
```bash
docker-compose up -d
```

### Rebuild and start:
```bash
docker-compose up --build
```

### Stop all services:
```bash
docker-compose down
```

### Stop and remove volumes (⚠️ This will delete database data):
```bash
docker-compose down -v
```

### View logs:
```bash
# All services
docker-compose logs

# Specific service
docker-compose logs frontend
docker-compose logs backend
docker-compose logs database
```

## Service Details

### Frontend (React/Vite)
- **Port**: 4000
- **Hot reload**: Enabled with volume mounting
- **Build context**: `./client`

### Backend (Express/Node.js)
- **Port**: 3001
- **Hot reload**: Enabled with nodemon and volume mounting
- **Build context**: `./server`
- **Environment**: MongoDB URI is configured for Docker network

### Database (MongoDB)
- **Port**: 27017
- **Data persistence**: Volume mounted (`mongodb_data`)
- **Database name**: `crud-mern-app`

## Environment Variables

The backend uses these environment variables (configured in docker-compose.yml):
- `MONGODB_URI`: Connection string for MongoDB
- `PORT`: Server port (3001)
- `NODE_ENV`: Environment mode (development)

## Network

All services run on a custom Docker network (`mern-network`) allowing:
- Service-to-service communication using service names
- Frontend can access backend at `http://backend:3001`
- Backend can access database at `mongodb://database:27017`

## Development Notes

- Both frontend and backend have volume mounting for hot reloading
- Node modules are excluded from volume mounting for performance
- CORS is configured to allow requests from the frontend container
- MongoDB data persists between container restarts

## Troubleshooting

### Port conflicts:
If you get port conflicts, check if services are running locally:
```bash
# Check what's using ports
netstat -ano | findstr :4000
netstat -ano | findstr :3001
netstat -ano | findstr :27017
```

### Reset everything:
```bash
docker-compose down -v
docker-compose up --build
```

### Access container shell:
```bash
# Frontend container
docker-compose exec frontend bash

# Backend container
docker-compose exec backend bash

# Database container
docker-compose exec database bash
```
