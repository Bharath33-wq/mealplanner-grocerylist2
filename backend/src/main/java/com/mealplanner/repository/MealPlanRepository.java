package com.mealplanner.repository;

import com.mealplanner.entity.MealPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MealPlanRepository extends JpaRepository<MealPlan, Long> {
    List<MealPlan> findByUserId(Long userId);
}
