package com.mealplanner.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "grocery_items")
public class GroceryItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String itemName;

    private String category;
    private String quantity;
    private boolean purchased;

    @Column(nullable = false)
    private Long userId;

    public GroceryItem() {}

    public GroceryItem(String itemName, String category, String quantity, boolean purchased, Long userId) {
        this.itemName = itemName;
        this.category = category;
        this.quantity = quantity;
        this.purchased = purchased;
        this.userId = userId;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getItemName() { return itemName; }
    public void setItemName(String itemName) { this.itemName = itemName; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getQuantity() { return quantity; }
    public void setQuantity(String quantity) { this.quantity = quantity; }
    public boolean isPurchased() { return purchased; }
    public void setPurchased(boolean purchased) { this.purchased = purchased; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
}
