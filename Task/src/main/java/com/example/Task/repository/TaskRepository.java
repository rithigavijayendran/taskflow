package com.example.Task.repository;

import com.example.Task.model.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    // Pagination support - returns Page object with metadata
    Page<Task> findAllByOrderByCreatedAtDesc(Pageable pageable);

    Page<Task> findByStatus(String status, Pageable pageable);

    Page<Task> findByPriority(String priority, Pageable pageable);

    Page<Task> findByTitleContainingIgnoreCase(String title, Pageable pageable);

    // Non-paginated methods (for backward compatibility)
    List<Task> findByStatus(String status);

    List<Task> findByPriority(String priority);

    List<Task> findByTitleContainingIgnoreCase(String title);

    List<Task> findAllByOrderByCreatedAtDesc();
}

