package com.example.Task.service;

import com.example.Task.model.Task;
import com.example.Task.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public Page<Task> getAllTasksPaginated(Pageable pageable) {
        return taskRepository.findAllByOrderByCreatedAtDesc(pageable);
    }

    public Page<Task> getTasksByStatusPaginated(String status, Pageable pageable) {
        return taskRepository.findByStatus(status, pageable);
    }

    public Page<Task> getTasksByPriorityPaginated(String priority, Pageable pageable) {
        return taskRepository.findByPriority(priority, pageable);
    }

    public Page<Task> searchTasksByTitlePaginated(String title, Pageable pageable) {
        return taskRepository.findByTitleContainingIgnoreCase(title, pageable);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAllByOrderByCreatedAtDesc();
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id: " + id));
    }

    public List<Task> getTasksByStatus(String status) {
        return taskRepository.findByStatus(status);
    }

    public List<Task> getTasksByPriority(String priority) {
        return taskRepository.findByPriority(priority);
    }

    public List<Task> searchTasksByTitle(String title) {
        return taskRepository.findByTitleContainingIgnoreCase(title);
    }

    public Task createTask(Task task) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        task.setUsername(username);

        if (task.getStatus() == null || task.getStatus().isEmpty()) {
            task.setStatus("PENDING");
        }
        if (task.getPriority() == null || task.getPriority().isEmpty()) {
            task.setPriority("MEDIUM");
        }
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task updatedTask) {
        Task existingTask = getTaskById(id);

        existingTask.setTitle(updatedTask.getTitle());
        existingTask.setDescription(updatedTask.getDescription());
        existingTask.setStatus(updatedTask.getStatus());
        existingTask.setPriority(updatedTask.getPriority());

        return taskRepository.save(existingTask);
    }

    public void deleteTask(Long id) {
        Task task = getTaskById(id);
        taskRepository.delete(task);
    }
}

