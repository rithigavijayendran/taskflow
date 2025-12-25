# 📝 TaskFlow Pro - Enterprise Task Management Platform

> A production-ready, full-stack enterprise task management platform featuring JWT authentication, RESTful APIs, and real-time task tracking. Built with Spring Boot 3.2, React 18, and PostgreSQL, implementing industry-standard security practices and modern architectural patterns.

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
- [Database Schema](#-database-schema)
- [Screenshots](#-screenshots)
- [Troubleshooting](#-troubleshooting)
- [Future Enhancements](#-future-enhancements)

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

## 🗄️ Database Schema

### Users Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | BIGSERIAL | PRIMARY KEY | Auto-incrementing ID |
| username | VARCHAR(255) | UNIQUE, NOT NULL | Username |
| email | VARCHAR(255) | UNIQUE, NOT NULL | Email address |
| password | VARCHAR(255) | NOT NULL | Encrypted password (BCrypt) |
| created_at | TIMESTAMP | DEFAULT NOW() | Registration timestamp |

### Tasks Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | BIGSERIAL | PRIMARY KEY | Auto-incrementing ID |
| title | VARCHAR(255) | NOT NULL | Task title |
| description | TEXT | - | Task description |
| status | VARCHAR(50) | DEFAULT 'PENDING' | Task status |
| priority | VARCHAR(50) | DEFAULT 'MEDIUM' | Task priority |
| username | VARCHAR(255) | - | Owner of the task |
| created_at | TIMESTAMP | DEFAULT NOW() | Creation timestamp |
| updated_at | TIMESTAMP | DEFAULT NOW() | Last update timestamp |

### Database Configuration

The application is configured to connect to PostgreSQL with the following settings:

```properties
# Database Configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/task
spring.datasource.username=postgres
spring.datasource.password=Rithi14
spring.jpa.hibernate.ddl-auto=update

# JWT Configuration (Optional - defaults are set in code)
jwt.secret=mySecretKeyForJWTTokenGenerationPleaseChangeInProduction123456789
jwt.expiration=86400000
```

**Note:** The `ddl-auto=update` setting means Spring Boot will automatically create/update the database schema based on your entity classes.

---

## 📸 Screenshots

### Main Dashboard
- Clean, modern interface
- Task cards with color-coded status and priority
- Real-time updates

### Task Creation
- Simple form with validation
- Dropdown for status and priority
- Instant feedback

### Filtering & Search
- Filter by status (Pending, In Progress, Completed, Cancelled)
- Filter by priority (Low, Medium, High, Urgent)
- Search by task title
- Clear all filters option

---

## 🐛 Troubleshooting

### Backend Issues

**Problem: Application won't start**
```
Solution:
1. Check if Java 17+ is installed: java -version
2. Ensure PostgreSQL is running
3. Verify database 'task' exists
4. Check if port 8080 is available
```

**Problem: Database connection error**
```
Solution:
1. Verify PostgreSQL is running
2. Check database credentials in application.properties
3. Ensure database 'task' exists
4. Test connection: psql -U postgres -d task
```

**Problem: Port 8080 already in use**
```
Solution:
1. Stop the process using port 8080
2. Or change port in application.properties:
   server.port=8081
```

### Frontend Issues

**Problem: Frontend won't start**
```
Solution:
1. Check if Node.js is installed: node --version
2. Delete node_modules folder
3. Run: npm install
4. Run: npm run dev
```

**Problem: Can't connect to backend**
```
Solution:
1. Ensure backend is running on port 8080
2. Check browser console for CORS errors
3. Verify API URL in frontend/src/services/api.js
```

**Problem: Port 3000 already in use**
```
Solution:
Vite will automatically suggest another port (e.g., 3001)
Press 'y' to use the suggested port
```

---

## 🧪 Testing the Application

### Manual Testing Steps

1. **Start both backend and frontend**
2. **Create a new task**
   - Fill in title and description
   - Select status and priority
   - Click "Add Task"
   - Verify task appears in the list

3. **Update a task**
   - Click "Edit" on any task
   - Modify the details
   - Click "Update Task"
   - Verify changes are saved

4. **Delete a task**
   - Click "Delete" on any task
   - Verify task is removed

5. **Filter tasks**
   - Use status dropdown to filter
   - Use priority dropdown to filter
   - Verify filtered results

6. **Search tasks**
   - Type in search box
   - Verify matching tasks appear

7. **Test persistence**
   - Stop the application
   - Restart the application
   - Verify tasks are still there (PostgreSQL persistence)

### API Testing with cURL

**Create a task:**
```bash
curl -X POST http://localhost:8080/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Task",
    "description": "Testing API",
    "status": "PENDING",
    "priority": "HIGH"
  }'
```

**Get all tasks:**
```bash
curl http://localhost:8080/api/tasks
```

**Get task by ID:**
```bash
curl http://localhost:8080/api/tasks/1
```

**Update a task:**
```bash
curl -X PUT http://localhost:8080/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Task",
    "description": "Updated description",
    "status": "COMPLETED",
    "priority": "HIGH"
  }'
```

**Delete a task:**
```bash
curl -X DELETE http://localhost:8080/api/tasks/1
```

---

## 🎯 Future Enhancements

### Planned Features
- [ ] **User Authentication** - Login/Register functionality
- [ ] **User Authorization** - Role-based access control
- [ ] **Due Dates** - Add deadlines to tasks
- [ ] **Task Categories** - Organize tasks by category/project
- [ ] **Tags** - Add multiple tags to tasks
- [ ] **Attachments** - Upload files to tasks
- [ ] **Comments** - Add comments to tasks
- [ ] **Notifications** - Email/push notifications for due tasks
- [ ] **Dark Mode** - Toggle between light and dark themes
- [ ] **Export** - Export tasks to CSV/PDF
- [ ] **Analytics** - Dashboard with task statistics
- [ ] **Collaboration** - Share tasks with team members
- [ ] **Mobile App** - Native mobile application
- [ ] **Drag & Drop** - Reorder tasks with drag and drop
- [ ] **Recurring Tasks** - Set tasks to repeat

### Technical Improvements
- [ ] Add unit tests (JUnit, Mockito)
- [ ] Add integration tests
- [ ] Add frontend tests (Jest, React Testing Library)
- [ ] Implement caching (Redis)
- [ ] Add API rate limiting
- [ ] Implement pagination for large datasets
- [ ] Add Docker support
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] API documentation with Swagger/OpenAPI
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)
- [ ] Logging improvements (ELK stack)

---

## 📚 Learning Resources

### Spring Boot
- [Spring Boot Official Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA Guide](https://spring.io/guides/gs/accessing-data-jpa/)
- [Building REST APIs with Spring](https://spring.io/guides/tutorials/rest/)

### React
- [React Official Documentation](https://react.dev/)
- [React Hooks Guide](https://react.dev/reference/react)
- [Vite Documentation](https://vitejs.dev/)

### PostgreSQL
- [PostgreSQL Official Documentation](https://www.postgresql.org/docs/)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)

### Full-Stack Development
- [REST API Best Practices](https://restfulapi.net/)
- [MVC Architecture Pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style
- Add comments to your code
- Update documentation if needed
- Test your changes thoroughly
- Write meaningful commit messages

---

## 📄 License

This project is licensed under the MIT License - feel free to use it for learning and personal projects.

```
MIT License

Copyright (c) 2024 Task Management System

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Task Management System**
- Built with ❤️ using Spring Boot and React
- A learning project demonstrating full-stack development

---

## 🙏 Acknowledgments

- **Spring Boot Team** - For the amazing framework
- **React Team** - For the powerful UI library
- **PostgreSQL** - For the robust database
- **Vite** - For blazing fast frontend tooling
- **Open Source Community** - For inspiration and resources

---

## 📞 Support

If you encounter any issues or have questions:

1. **Check the [Troubleshooting](#-troubleshooting) section**
2. **Review the [API Documentation](#-api-documentation)**
3. **Check existing issues on GitHub**
4. **Create a new issue with detailed information**

---

## 🎓 What You'll Learn

By working with this project, you'll gain experience in:

- ✅ Building RESTful APIs with Spring Boot
- ✅ Using Spring Data JPA for database operations
- ✅ Creating React applications with hooks
- ✅ Connecting frontend and backend
- ✅ Working with PostgreSQL database
- ✅ Implementing CRUD operations
- ✅ MVC architecture pattern
- ✅ State management in React
- ✅ API integration with Axios
- ✅ Responsive web design
- ✅ Full-stack application deployment

---

## 📊 Project Statistics

- **Backend Lines of Code:** ~500
- **Frontend Lines of Code:** ~800
- **Total Components:** 5 React components
- **API Endpoints:** 9 endpoints
- **Database Tables:** 1 table
- **Technologies Used:** 15+

---

## 🚀 Quick Start Summary

```bash
# 1. Create PostgreSQL database
psql -U postgres
CREATE DATABASE task;
\q

# 2. Start Backend (Terminal 1)
cd Task
./mvnw spring-boot:run

# 3. Start Frontend (Terminal 2)
cd frontend
npm install
npm run dev

# 4. Open browser
http://localhost:3000
```

---

**Happy Task Managing! 🎉**

Made with ❤️ while learning Spring Boot and React

---

*Last Updated: December 24, 2024*
