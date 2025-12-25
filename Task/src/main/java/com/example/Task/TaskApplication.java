package com.example.Task;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Main Application Class - This is where our Spring Boot application starts
@SpringBootApplication
public class TaskApplication {

    public static void main(String[] args) {
        // Start the Spring Boot application
        SpringApplication.run(TaskApplication.class, args);

        // Print success message with useful URLs
        System.out.println("\n========================================");
        System.out.println("🚀 Task Management App Started!");
        System.out.println("========================================");
        System.out.println("📍 Backend API: http://localhost:8080");
        System.out.println("📝 API Endpoint: http://localhost:8080/api/tasks");
        System.out.println("📊 Database Console: http://localhost:8080/h2-console");
        System.out.println("========================================\n");
    }
}
