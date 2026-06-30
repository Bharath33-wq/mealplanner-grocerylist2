package com.mealplanner.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "budgets")
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String category;

    private double amount;
    private double spent;
    private LocalDate date;

    @Column(nullable = false)
    private Long userId;

    public Budget() {}

    public Budget(String category, double amount, double spent, LocalDate date, Long userId) {
        this.category = category;
        this.amount = amount;
        this.spent = spent;
        this.date = date;
        this.userId = userId;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public double getAmount() { return amount; }
    public void setAmount(double amount) { this.amount = amount; }
    public double getSpent() { return spent; }
    public void setSpent(double spent) { this.spent = spent; }
    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
}
