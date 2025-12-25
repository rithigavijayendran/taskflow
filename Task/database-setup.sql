-- Database Setup Script for Task Management System
-- Run this script in PostgreSQL to create the database

-- Create the database
CREATE DATABASE task;

-- Connect to the database (you need to do this manually in pgAdmin or psql)
-- \c task

-- The tables will be created automatically by Spring Boot JPA
-- when you run the application (hibernate.ddl-auto=update)

-- Optional: Create the tasks table manually if needed
-- CREATE TABLE tasks (
--     id BIGSERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     status VARCHAR(50) DEFAULT 'PENDING',
--     priority VARCHAR(50) DEFAULT 'MEDIUM',
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

