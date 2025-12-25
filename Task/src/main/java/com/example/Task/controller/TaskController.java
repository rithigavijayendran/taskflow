package com.example.Task.controller;

import com.example.Task.model.Task;
import com.example.Task.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*") 
@RequiredArgsConstructor 
public class TaskController {

    private final TaskService taskService;

    @GetMapping("/paginated")
    public Page<Task> getAllTasksPaginated(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String priority,
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "DESC") String sortDirection) {

        Sort sort = sortDirection.equalsIgnoreCase("ASC")
                ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        if (search != null && !search.isEmpty()) {
            return taskService.searchTasksByTitlePaginated(search, pageable);
        }
        else if (status != null) {
            return taskService.getTasksByStatusPaginated(status, pageable);
        }
        else if (priority != null) {
            return taskService.getTasksByPriorityPaginated(priority, pageable);
        }
        else {
            return taskService.getAllTasksPaginated(pageable);
        }
    }

    @GetMapping
    public List<Task> getAllTasks(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String priority,
            @RequestParam(required = false) String search) {

        if (search != null && !search.isEmpty()) {
            return taskService.searchTasksByTitle(search);
        }
        else if (status != null) {
            return taskService.getTasksByStatus(status);
        }
        else if (priority != null) {
            return taskService.getTasksByPriority(priority);
        }
        else {
            return taskService.getAllTasks();
        }
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        return taskService.updateTask(id, task);
    }

    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return "Task deleted successfully!";
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "Task Management API is running!";
    }
}

