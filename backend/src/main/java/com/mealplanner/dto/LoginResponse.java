package com.mealplanner.dto;

public class LoginResponse {
    private Long userId;
    private String username;
    private String fullName;
    private String message;

    public LoginResponse(Long userId, String username, String fullName, String message) {
        this.userId = userId;
        this.username = username;
        this.fullName = fullName;
        this.message = message;
    }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
