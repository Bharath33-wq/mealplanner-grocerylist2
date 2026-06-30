package com.mealplanner.repository;

import com.mealplanner.entity.GroceryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface GroceryItemRepository extends JpaRepository<GroceryItem, Long> {
    List<GroceryItem> findByUserId(Long userId);
}
