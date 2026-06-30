package com.mealplanner.controller;

import com.mealplanner.dto.LoginRequest;
import com.mealplanner.dto.LoginResponse;
import com.mealplanner.entity.User;
import com.mealplanner.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<User> user = userRepository.findByUsernameAndPassword(request.getUsername(), request.getPassword());
        if (user.isPresent()) {
            User u = user.get();
            return ResponseEntity.ok(new LoginResponse(u.getId(), u.getUsername(), u.getFullName(), "Login successful"));
        }
        return ResponseEntity.status(401).body(new LoginResponse(null, null, null, "Invalid username or password"));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        Optional<User> existing = userRepository.findByUsername(user.getUsername());
        if (existing.isPresent()) {
            return ResponseEntity.status(409).body(new LoginResponse(null, null, null, "Username already exists"));
        }
        User saved = userRepository.save(user);
        return ResponseEntity.ok(new LoginResponse(saved.getId(), saved.getUsername(), saved.getFullName(), "Registration successful"));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String newPassword = request.get("newPassword");
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            User u = user.get();
            u.setPassword(newPassword);
            userRepository.save(u);
            return ResponseEntity.ok(new LoginResponse(u.getId(), u.getUsername(), u.getFullName(), "Password reset successful"));
        }
        return ResponseEntity.status(404).body(new LoginResponse(null, null, null, "Username not found"));
    }
}
