package com.example.Task.controller;

import com.example.Task.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public Map<String, String> register(@RequestBody Map<String, String> request) {
        return authService.register(
            request.get("username"),
            request.get("email"),
            request.get("password")
        );
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> request) {
        return authService.login(
            request.get("username"),
            request.get("password")
        );
    }
}

