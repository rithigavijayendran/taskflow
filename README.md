# 📝 TaskFlow Pro - Enterprise Task Management Platform

> A full-stack task management platform featuring JWT authentication, RESTful APIs, and real-time task tracking. Built with Spring Boot 3.2, React 18, and PostgreSQL, implementing industry-standard security practices and modern architectural patterns.

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)

---

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)

---

## ✨ Features

### Core Functionality
- 🔐 **User Authentication** - Secure login and registration with JWT
- ✅ **Create Tasks** - Add new tasks with title, description, status, and priority
- ✅ **View Tasks** - Display all tasks in a clean, organized interface
- ✅ **Update Tasks** - Edit existing tasks with real-time updates
- ✅ **Delete Tasks** - Remove completed or unwanted tasks
- ✅ **Filter Tasks** - Filter by status (Pending, In Progress, Completed, Cancelled)
- ✅ **Priority Management** - Set task priority (Low, Medium, High, Urgent)
- ✅ **Search** - Search tasks by title
- ✅ **Pagination** - Paginated task lists for better performance
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices

### Technical Features
- 🔒 **JWT Authentication** - Secure token-based authentication
- 🏗️ **MVC Architecture** - Clean separation of concerns
- 🔄 **RESTful API** - Standard HTTP methods (GET, POST, PUT, DELETE)
- 💾 **PostgreSQL Database** - Persistent data storage
- 🎨 **Modern UI** - Clean and intuitive user interface
- ⚡ **Real-time Updates** - Instant feedback on all operations
- 🔑 **Spring Security** - Enterprise-grade security

---

## 🛠️ Tech Stack

### Backend
- **Spring Boot 3.2.0** - Application framework
- **Spring Security** - Authentication and authorization
- **JWT (JSON Web Token)** - Secure token-based authentication
- **Spring Data JPA** - Database operations
- **PostgreSQL** - Relational database
- **Spring Web** - RESTful web services
- **Lombok** - Reduce boilerplate code
- **Maven** - Build and dependency management
- **Java 17** - Programming language

### Frontend
- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool and dev server
- **Axios** - HTTP client
- **Modern CSS** - Styling with Flexbox/Grid

---

## 📁 Project Structure

```
Task/                                    ← Backend (Spring Boot)
├── src/main/java/com/example/Task/
│   ├── TaskApplication.java            # Main application entry point
│   ├── controller/
│   │   ├── TaskController.java         # Task REST API endpoints
│   │   └── AuthController.java         # Authentication endpoints
│   ├── service/
│   │   ├── TaskService.java            # Task business logic
│   │   └── AuthService.java            # Authentication logic
│   ├── repository/
│   │   ├── TaskRepository.java         # Task database access
│   │   └── UserRepository.java         # User database access
│   ├── model/
│   │   ├── Task.java                   # Task entity
│   │   └── User.java                   # User entity
│   ├── config/
│   │   └── SecurityConfig.java         # Security configuration
│   ├── filter/
│   │   └── JwtAuthFilter.java          # JWT authentication filter
│   └── util/
│       └── JwtUtil.java                # JWT utility methods
├── src/main/resources/
│   └── application.properties          # Application configuration
├── pom.xml                             # Maven dependencies
└── database-setup.sql                  # Database setup script

frontend/                                ← Frontend (React)
├── src/
│   ├── App.jsx                         # Main React component
│   ├── components/
│   │   ├── Login.jsx                   # Login page
│   │   ├── Register.jsx                # Registration page
│   │   ├── TaskForm.jsx                # Task creation/edit form
│   │   ├── TaskList.jsx                # Task list container
│   │   ├── TaskItem.jsx                # Individual task card
│   │   └── FilterBar.jsx               # Filter controls
│   ├── services/
│   │   └── api.js                      # API service with JWT
│   └── main.jsx                        # Application entry point
├── package.json                        # NPM dependencies
└── vite.config.js                      # Vite configuration
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Java 17 or higher** - [Download](https://www.oracle.com/java/technologies/downloads/)
- **Node.js 16+ and npm** - [Download](https://nodejs.org/)
- **PostgreSQL 12+** - [Download](https://www.postgresql.org/download/)
- **Maven 3.6+** (or use included Maven wrapper)
- **Git** (optional) - [Download](https://git-scm.com/)

---

## 🚀 Installation & Setup

### 1. Database Setup

Create the PostgreSQL database before running the application.

**Option A: Using pgAdmin (GUI)**
1. Open pgAdmin
2. Right-click on "Databases"
3. Select "Create" → "Database"
4. Enter database name: `task`
5. Click "Save"

**Option B: Using psql (Command Line)**
```bash
psql -U postgres
CREATE DATABASE task;
\q
```

**Option C: Using the provided SQL script**
```bash
psql -U postgres -f database-setup.sql
```

### 2. Backend Setup

```bash
# Navigate to the Task directory
cd Task

# Build the project (downloads dependencies)
./mvnw clean install

# Or on Windows
mvnw.cmd clean install
```

### 3. Frontend Setup

```bash
# Navigate to the frontend directory
cd ../frontend

# Install dependencies
npm install
```

---

## ▶️ Running the Application

### Start the Backend

```bash
# From the Task directory
cd Task
./mvnw spring-boot:run

# Or on Windows
mvnw.cmd spring-boot:run
```

The backend will start at: **http://localhost:8080**

You should see:
```
========================================
🚀 Task Management App Started!
========================================
📍 Backend API: http://localhost:8080
📝 API Endpoint: http://localhost:8080/api/tasks
========================================
```

### Start the Frontend

Open a **new terminal** window:

```bash
# From the frontend directory
cd frontend0
npm run dev
```

The frontend will start at: **http://localhost:3000**

### Access the Application

Open your browser and navigate to: **http://localhost:3000**

---

## 📡 API Documentation

### Base URL
```
http://localhost:8080/api
```

### Authentication Endpoints (Public)

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/api/auth/register` | Register new user | User JSON |
| POST | `/api/auth/login` | Login user | Credentials JSON |

### Task Endpoints (Protected - Requires JWT Token)

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/tasks` | Get all tasks | - |
| GET | `/api/tasks/paginated` | Get paginated tasks | - |
| GET | `/api/tasks/{id}` | Get task by ID | - |
| POST | `/api/tasks` | Create new task | Task JSON |
| PUT | `/api/tasks/{id}` | Update task | Task JSON |
| DELETE | `/api/tasks/{id}` | Delete task | - |
| GET | `/api/tasks?status={status}` | Filter by status | - |
| GET | `/api/tasks?priority={priority}` | Filter by priority | - |
| GET | `/api/tasks?search={keyword}` | Search by title | - |
| GET | `/api/tasks/health` | Health check | - |

### Authentication Flow

1. **Register**: Create a new account
2. **Login**: Get JWT token
3. **Use Token**: Include token in Authorization header for all protected endpoints

**Authorization Header Format:**
```
Authorization: Bearer <your-jwt-token>
```

### Request/Response Examples

**Register User (POST /api/auth/register)**

Request:
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

Response (200 OK):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "john_doe",
  "email": "john@example.com",
  "message": "Registration successful"
}
```

**Login (POST /api/auth/login)**

Request:
```json
{
  "username": "john_doe",
  "password": "securePassword123"
}
```

Response (200 OK):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "john_doe",
  "email": "john@example.com",
  "message": "Login successful"
}
```

**Create Task (POST /api/tasks)** - Requires JWT Token

Request Headers:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json
```

Request Body:
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "status": "PENDING",
  "priority": "HIGH"
}
```

Response (201 Created):
```json
{
  "id": 1,
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "status": "PENDING",
  "priority": "HIGH",
  "username": "john_doe",
  "createdAt": "2024-12-24T10:30:00",
  "updatedAt": "2024-12-24T10:30:00"
}
```

**Get All Tasks (GET /api/tasks)**

Response (200 OK):
```json
[
  {
    "id": 1,
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API docs",
    "status": "PENDING",
    "priority": "HIGH",
    "createdAt": "2024-12-24T10:30:00",
    "updatedAt": "2024-12-24T10:30:00"
  },
  {
    "id": 2,
    "title": "Review pull requests",
    "description": "Review and merge pending PRs",
    "status": "IN_PROGRESS",
    "priority": "MEDIUM",
    "createdAt": "2024-12-24T11:00:00",
    "updatedAt": "2024-12-24T11:00:00"
  }
]
```

**Update Task (PUT /api/tasks/1)**

Request:
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "status": "COMPLETED",
  "priority": "HIGH"
}
```

Response (200 OK):
```json
{
  "id": 1,
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "status": "COMPLETED",
  "priority": "HIGH",
  "createdAt": "2024-12-24T10:30:00",
  "updatedAt": "2024-12-24T14:30:00"
}
```

**Delete Task (DELETE /api/tasks/1)**

Response (204 No Content)

### Status Values
- `PENDING` - Task is pending
- `IN_PROGRESS` - Task is in progress
- `COMPLETED` - Task is completed
- `CANCELLED` - Task is cancelled

### Priority Values
- `LOW` - Low priority
- `MEDIUM` - Medium priority
- `HIGH` - High priority
- `URGENT` - Urgent priority

---

