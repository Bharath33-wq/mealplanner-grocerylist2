package com.mealplanner.controller;

import com.mealplanner.entity.Recipe;
import com.mealplanner.repository.RecipeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeRepository recipeRepository;

    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @GetMapping("/user/{userId}")
    public List<Recipe> getByUser(@PathVariable Long userId) {
        return recipeRepository.findByUserId(userId);
    }

    @PostMapping
    public Recipe create(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recipe> update(@PathVariable Long id, @RequestBody Recipe recipe) {
        return recipeRepository.findById(id)
                .map(existing -> {
                    existing.setTitle(recipe.getTitle());
                    existing.setIngredients(recipe.getIngredients());
                    existing.setInstructions(recipe.getInstructions());
                    existing.setCategory(recipe.getCategory());
                    existing.setPrepTime(recipe.getPrepTime());
                    existing.setCookTime(recipe.getCookTime());
                    existing.setServings(recipe.getServings());
                    return ResponseEntity.ok(recipeRepository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        recipeRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
