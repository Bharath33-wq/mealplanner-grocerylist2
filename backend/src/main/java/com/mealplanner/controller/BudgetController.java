package com.mealplanner.controller;

import com.mealplanner.entity.Budget;
import com.mealplanner.repository.BudgetRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budgets")
public class BudgetController {

    private final BudgetRepository budgetRepository;

    public BudgetController(BudgetRepository budgetRepository) {
        this.budgetRepository = budgetRepository;
    }

    @GetMapping("/user/{userId}")
    public List<Budget> getByUser(@PathVariable Long userId) {
        return budgetRepository.findByUserId(userId);
    }

    @PostMapping
    public Budget create(@RequestBody Budget budget) {
        return budgetRepository.save(budget);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Budget> update(@PathVariable Long id, @RequestBody Budget budget) {
        return budgetRepository.findById(id)
                .map(existing -> {
                    existing.setCategory(budget.getCategory());
                    existing.setAmount(budget.getAmount());
                    existing.setSpent(budget.getSpent());
                    existing.setDate(budget.getDate());
                    return ResponseEntity.ok(budgetRepository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        budgetRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
