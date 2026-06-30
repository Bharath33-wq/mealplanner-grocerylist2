package com.mealplanner.controller;

import com.mealplanner.entity.MealPlan;
import com.mealplanner.repository.MealPlanRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meal-plans")
public class MealPlanController {

    private final MealPlanRepository mealPlanRepository;

    public MealPlanController(MealPlanRepository mealPlanRepository) {
        this.mealPlanRepository = mealPlanRepository;
    }

    @GetMapping("/user/{userId}")
    public List<MealPlan> getByUser(@PathVariable Long userId) {
        return mealPlanRepository.findByUserId(userId);
    }

    @PostMapping
    public MealPlan create(@RequestBody MealPlan mealPlan) {
        return mealPlanRepository.save(mealPlan);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MealPlan> update(@PathVariable Long id, @RequestBody MealPlan mealPlan) {
        return mealPlanRepository.findById(id)
                .map(existing -> {
                    existing.setDayOfWeek(mealPlan.getDayOfWeek());
                    existing.setBreakfast(mealPlan.getBreakfast());
                    existing.setLunch(mealPlan.getLunch());
                    existing.setDinner(mealPlan.getDinner());
                    existing.setSnacks(mealPlan.getSnacks());
                    return ResponseEntity.ok(mealPlanRepository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        mealPlanRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
