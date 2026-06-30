package com.mealplanner.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "recipes")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 2000)
    private String ingredients;

    @Column(length = 5000)
    private String instructions;

    private String category;
    private int prepTime;
    private int cookTime;
    private int servings;

    @Column(nullable = false)
    private Long userId;

    public Recipe() {}

    public Recipe(String title, String ingredients, String instructions, String category,
                  int prepTime, int cookTime, int servings, Long userId) {
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.category = category;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.servings = servings;
        this.userId = userId;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getIngredients() { return ingredients; }
    public void setIngredients(String ingredients) { this.ingredients = ingredients; }
    public String getInstructions() { return instructions; }
    public void setInstructions(String instructions) { this.instructions = instructions; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public int getPrepTime() { return prepTime; }
    public void setPrepTime(int prepTime) { this.prepTime = prepTime; }
    public int getCookTime() { return cookTime; }
    public void setCookTime(int cookTime) { this.cookTime = cookTime; }
    public int getServings() { return servings; }
    public void setServings(int servings) { this.servings = servings; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
}
