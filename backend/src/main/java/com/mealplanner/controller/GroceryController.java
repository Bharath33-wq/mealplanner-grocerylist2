package com.mealplanner.controller;

import com.mealplanner.entity.GroceryItem;
import com.mealplanner.repository.GroceryItemRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/grocery")
public class GroceryController {

    private final GroceryItemRepository groceryItemRepository;

    public GroceryController(GroceryItemRepository groceryItemRepository) {
        this.groceryItemRepository = groceryItemRepository;
    }

    @GetMapping("/user/{userId}")
    public List<GroceryItem> getByUser(@PathVariable Long userId) {
        return groceryItemRepository.findByUserId(userId);
    }

    @PostMapping
    public GroceryItem create(@RequestBody GroceryItem item) {
        return groceryItemRepository.save(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<GroceryItem> update(@PathVariable Long id, @RequestBody GroceryItem item) {
        return groceryItemRepository.findById(id)
                .map(existing -> {
                    existing.setItemName(item.getItemName());
                    existing.setCategory(item.getCategory());
                    existing.setQuantity(item.getQuantity());
                    existing.setPurchased(item.isPurchased());
                    return ResponseEntity.ok(groceryItemRepository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        groceryItemRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
