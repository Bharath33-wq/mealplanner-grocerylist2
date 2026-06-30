package com.mealplanner.config;

import com.mealplanner.entity.*;
import com.mealplanner.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final MealPlanRepository mealPlanRepository;
    private final GroceryItemRepository groceryItemRepository;
    private final BudgetRepository budgetRepository;
    private final RecipeRepository recipeRepository;
    private final ReminderRepository reminderRepository;

    public DataLoader(UserRepository userRepository, MealPlanRepository mealPlanRepository,
                      GroceryItemRepository groceryItemRepository, BudgetRepository budgetRepository,
                      RecipeRepository recipeRepository, ReminderRepository reminderRepository) {
        this.userRepository = userRepository;
        this.mealPlanRepository = mealPlanRepository;
        this.groceryItemRepository = groceryItemRepository;
        this.budgetRepository = budgetRepository;
        this.recipeRepository = recipeRepository;
        this.reminderRepository = reminderRepository;
    }

    @Override
    public void run(String... args) {
        if (userRepository.count() > 0) {
            return;
        }
        // Create 3 users
        User user1 = userRepository.save(new User("pooja", "test123", "Pooja Shree", "pooja@example.com"));
        User user2 = userRepository.save(new User("john", "test123", "John Doe", "john@example.com"));
        User user3 = userRepository.save(new User("bharath", "test123", "Bharath Thirumalai", "bharath@example.com"));

        // ===== MEAL PLANS for User 1 =====
        mealPlanRepository.save(new MealPlan("Monday", "Oatmeal with Berries", "Grilled Chicken Salad", "Pasta Primavera", "Greek Yogurt", user1.getId()));
        mealPlanRepository.save(new MealPlan("Tuesday", "Scrambled Eggs & Toast", "Veggie Wrap", "Salmon with Rice", "Mixed Nuts", user1.getId()));
        mealPlanRepository.save(new MealPlan("Wednesday", "Smoothie Bowl", "Quinoa Bowl", "Chicken Stir Fry", "Apple Slices", user1.getId()));
        mealPlanRepository.save(new MealPlan("Thursday", "Pancakes", "Turkey Sandwich", "Beef Tacos", "Protein Bar", user1.getId()));
        mealPlanRepository.save(new MealPlan("Friday", "Avocado Toast", "Caesar Salad", "Pizza Night", "Trail Mix", user1.getId()));
        mealPlanRepository.save(new MealPlan("Saturday", "French Toast", "Sushi Bowl", "BBQ Chicken", "Fruit Salad", user1.getId()));
        mealPlanRepository.save(new MealPlan("Sunday", "Eggs Benedict", "Soup & Bread", "Roast Dinner", "Dark Chocolate", user1.getId()));

        // ===== MEAL PLANS for User 2 =====
        mealPlanRepository.save(new MealPlan("Monday", "Cereal with Milk", "Chicken Wrap", "Spaghetti Bolognese", "Banana", user2.getId()));
        mealPlanRepository.save(new MealPlan("Tuesday", "Waffles", "Fish Tacos", "Grilled Steak", "Granola Bar", user2.getId()));
        mealPlanRepository.save(new MealPlan("Wednesday", "Fruit Smoothie", "BLT Sandwich", "Vegetable Curry", "Cheese & Crackers", user2.getId()));
        mealPlanRepository.save(new MealPlan("Thursday", "Bagel & Cream Cheese", "Greek Salad", "Chicken Parmesan", "Hummus & Veggies", user2.getId()));
        mealPlanRepository.save(new MealPlan("Friday", "Granola & Yogurt", "Burrito Bowl", "Fish & Chips", "Popcorn", user2.getId()));
        mealPlanRepository.save(new MealPlan("Saturday", "Breakfast Burrito", "Pad Thai", "Lamb Chops", "Ice Cream", user2.getId()));
        mealPlanRepository.save(new MealPlan("Sunday", "Belgian Waffles", "Club Sandwich", "Sunday Roast", "Cookies", user2.getId()));

        // ===== GROCERY ITEMS for User 1 =====
        groceryItemRepository.save(new GroceryItem("Chicken Breast", "Meat", "1 kg", false, user1.getId()));
        groceryItemRepository.save(new GroceryItem("Broccoli", "Vegetables", "2 heads", false, user1.getId()));
        groceryItemRepository.save(new GroceryItem("Brown Rice", "Grains", "1 bag", true, user1.getId()));
        groceryItemRepository.save(new GroceryItem("Eggs", "Dairy", "1 dozen", false, user1.getId()));
        groceryItemRepository.save(new GroceryItem("Olive Oil", "Pantry", "1 bottle", true, user1.getId()));
        groceryItemRepository.save(new GroceryItem("Bananas", "Fruits", "6 pieces", false, user1.getId()));
        groceryItemRepository.save(new GroceryItem("Milk", "Dairy", "1 litre", false, user1.getId()));
        groceryItemRepository.save(new GroceryItem("Whole Wheat Bread", "Bakery", "1 loaf", true, user1.getId()));

        // ===== GROCERY ITEMS for User 2 =====
        groceryItemRepository.save(new GroceryItem("Salmon Fillet", "Seafood", "500g", false, user2.getId()));
        groceryItemRepository.save(new GroceryItem("Spinach", "Vegetables", "1 bunch", false, user2.getId()));
        groceryItemRepository.save(new GroceryItem("Pasta", "Grains", "2 packs", true, user2.getId()));
        groceryItemRepository.save(new GroceryItem("Greek Yogurt", "Dairy", "500g", false, user2.getId()));
        groceryItemRepository.save(new GroceryItem("Tomatoes", "Vegetables", "6 pieces", false, user2.getId()));
        groceryItemRepository.save(new GroceryItem("Avocados", "Fruits", "3 pieces", false, user2.getId()));
        groceryItemRepository.save(new GroceryItem("Cheese", "Dairy", "200g", true, user2.getId()));

        // ===== BUDGETS for User 1 =====
        budgetRepository.save(new Budget("Groceries", 500.00, 320.50, LocalDate.of(2026, 6, 1), user1.getId()));
        budgetRepository.save(new Budget("Dining Out", 200.00, 85.00, LocalDate.of(2026, 6, 1), user1.getId()));
        budgetRepository.save(new Budget("Snacks", 100.00, 45.75, LocalDate.of(2026, 6, 1), user1.getId()));
        budgetRepository.save(new Budget("Beverages", 80.00, 32.00, LocalDate.of(2026, 6, 1), user1.getId()));

        // ===== BUDGETS for User 2 =====
        budgetRepository.save(new Budget("Groceries", 600.00, 410.00, LocalDate.of(2026, 6, 1), user2.getId()));
        budgetRepository.save(new Budget("Dining Out", 300.00, 180.50, LocalDate.of(2026, 6, 1), user2.getId()));
        budgetRepository.save(new Budget("Snacks", 80.00, 60.00, LocalDate.of(2026, 6, 1), user2.getId()));
        budgetRepository.save(new Budget("Beverages", 120.00, 55.00, LocalDate.of(2026, 6, 1), user2.getId()));

        // ===== RECIPES for User 1 =====
        recipeRepository.save(new Recipe("Grilled Chicken Salad",
                "Chicken breast, Mixed greens, Cherry tomatoes, Cucumber, Feta cheese, Olive oil, Lemon juice",
                "1. Season chicken with salt and pepper.\n2. Grill for 6-7 minutes each side.\n3. Slice and arrange over mixed greens.\n4. Add tomatoes, cucumber, and feta.\n5. Drizzle with olive oil and lemon juice.",
                "Lunch", 10, 15, 2, user1.getId()));
        recipeRepository.save(new Recipe("Pasta Primavera",
                "Penne pasta, Bell peppers, Zucchini, Cherry tomatoes, Garlic, Olive oil, Parmesan cheese, Basil",
                "1. Cook pasta according to package directions.\n2. Sauté garlic and vegetables in olive oil.\n3. Toss pasta with vegetables.\n4. Top with parmesan and fresh basil.",
                "Dinner", 10, 20, 4, user1.getId()));
        recipeRepository.save(new Recipe("Smoothie Bowl",
                "Frozen mixed berries, Banana, Greek yogurt, Granola, Honey, Chia seeds",
                "1. Blend berries, banana, and yogurt until thick.\n2. Pour into a bowl.\n3. Top with granola, chia seeds, and a drizzle of honey.",
                "Breakfast", 5, 0, 1, user1.getId()));

        // ===== RECIPES for User 2 =====
        recipeRepository.save(new Recipe("Spaghetti Bolognese",
                "Spaghetti, Ground beef, Onion, Garlic, Canned tomatoes, Tomato paste, Italian herbs, Parmesan",
                "1. Brown the ground beef with onion and garlic.\n2. Add tomatoes, paste, and herbs.\n3. Simmer for 30 minutes.\n4. Cook spaghetti and serve with sauce.\n5. Top with parmesan.",
                "Dinner", 15, 40, 4, user2.getId()));
        recipeRepository.save(new Recipe("Fish Tacos",
                "White fish fillets, Corn tortillas, Cabbage slaw, Lime, Sour cream, Cilantro, Avocado",
                "1. Season fish with cumin, paprika, salt.\n2. Pan-fry for 3-4 minutes each side.\n3. Warm tortillas.\n4. Assemble with fish, slaw, avocado, and sour cream.\n5. Squeeze lime over top.",
                "Lunch", 15, 10, 3, user2.getId()));
        recipeRepository.save(new Recipe("Vegetable Curry",
                "Chickpeas, Coconut milk, Sweet potato, Spinach, Onion, Garlic, Curry paste, Rice",
                "1. Sauté onion and garlic.\n2. Add curry paste and cook 1 minute.\n3. Add sweet potato and coconut milk.\n4. Simmer 20 minutes.\n5. Add chickpeas and spinach.\n6. Serve over rice.",
                "Dinner", 10, 30, 4, user2.getId()));

        // ===== REMINDERS for User 1 =====
        reminderRepository.save(new Reminder("Grocery Shopping", "Buy weekly groceries from the store",
                LocalDateTime.of(2026, 6, 21, 10, 0), "Shopping", true, user1.getId()));
        reminderRepository.save(new Reminder("Meal Prep Sunday", "Prepare meals for the upcoming week",
                LocalDateTime.of(2026, 6, 22, 9, 0), "Cooking", true, user1.getId()));
        reminderRepository.save(new Reminder("Check Pantry", "Check pantry items and update grocery list",
                LocalDateTime.of(2026, 6, 20, 18, 0), "Planning", true, user1.getId()));
        reminderRepository.save(new Reminder("Farmers Market", "Visit the weekend farmers market",
                LocalDateTime.of(2026, 6, 22, 8, 0), "Shopping", false, user1.getId()));

        // ===== REMINDERS for User 2 =====
        reminderRepository.save(new Reminder("Weekly Meal Plan", "Plan meals for next week",
                LocalDateTime.of(2026, 6, 21, 11, 0), "Planning", true, user2.getId()));
        reminderRepository.save(new Reminder("Buy Spices", "Restock cumin, paprika, and turmeric",
                LocalDateTime.of(2026, 6, 23, 14, 0), "Shopping", true, user2.getId()));
        reminderRepository.save(new Reminder("Try New Recipe", "Cook the vegetable curry recipe",
                LocalDateTime.of(2026, 6, 24, 17, 0), "Cooking", true, user2.getId()));
        reminderRepository.save(new Reminder("Budget Review", "Review this month's food spending",
                LocalDateTime.of(2026, 6, 30, 20, 0), "Finance", false, user2.getId()));

        // ===== MEAL PLANS for User 3 (Bharath) =====
        mealPlanRepository.save(new MealPlan("Monday", "Idli & Sambar", "Chicken Biryani", "Butter Chicken & Naan", "Masala Chai & Biscuits", user3.getId()));
        mealPlanRepository.save(new MealPlan("Tuesday", "Dosa & Chutney", "Veg Fried Rice", "Paneer Tikka Masala", "Fruit Bowl", user3.getId()));
        mealPlanRepository.save(new MealPlan("Wednesday", "Poha", "Dal Rice", "Mutton Curry & Roti", "Samosa", user3.getId()));
        mealPlanRepository.save(new MealPlan("Thursday", "Upma", "Chole Bhature", "Fish Curry & Rice", "Lassi", user3.getId()));
        mealPlanRepository.save(new MealPlan("Friday", "Paratha & Curd", "Rajma Rice", "Tandoori Chicken", "Pakora", user3.getId()));
        mealPlanRepository.save(new MealPlan("Saturday", "Puri & Aloo", "Pulao & Raita", "Prawn Masala & Rice", "Ice Cream", user3.getId()));
        mealPlanRepository.save(new MealPlan("Sunday", "Masala Omelette & Toast", "Hyderabadi Biryani", "Chicken Tikka & Naan", "Gulab Jamun", user3.getId()));

        // ===== GROCERY ITEMS for User 3 =====
        groceryItemRepository.save(new GroceryItem("Basmati Rice", "Grains", "2 kg", false, user3.getId()));
        groceryItemRepository.save(new GroceryItem("Chicken", "Meat", "1 kg", false, user3.getId()));
        groceryItemRepository.save(new GroceryItem("Paneer", "Dairy", "500g", false, user3.getId()));
        groceryItemRepository.save(new GroceryItem("Onions", "Vegetables", "1 kg", true, user3.getId()));
        groceryItemRepository.save(new GroceryItem("Tomatoes", "Vegetables", "500g", false, user3.getId()));
        groceryItemRepository.save(new GroceryItem("Yogurt", "Dairy", "1 litre", false, user3.getId()));
        groceryItemRepository.save(new GroceryItem("Garam Masala", "Pantry", "1 pack", true, user3.getId()));

        // ===== BUDGETS for User 3 =====
        budgetRepository.save(new Budget("Groceries", 450.00, 280.00, LocalDate.of(2026, 6, 1), user3.getId()));
        budgetRepository.save(new Budget("Dining Out", 250.00, 120.00, LocalDate.of(2026, 6, 1), user3.getId()));
        budgetRepository.save(new Budget("Snacks", 90.00, 55.00, LocalDate.of(2026, 6, 1), user3.getId()));
        budgetRepository.save(new Budget("Beverages", 100.00, 40.00, LocalDate.of(2026, 6, 1), user3.getId()));

        // ===== RECIPES for User 3 =====
        recipeRepository.save(new Recipe("Chicken Biryani",
                "Basmati rice, Chicken, Yogurt, Onions, Tomatoes, Ginger-garlic paste, Biryani masala, Saffron, Mint, Cilantro, Ghee",
                "1. Marinate chicken with yogurt and spices for 1 hour.\n2. Cook rice till 70% done.\n3. Fry onions till golden.\n4. Layer chicken and rice in pot.\n5. Add saffron milk and ghee.\n6. Dum cook on low heat for 25 minutes.",
                "Lunch", 30, 45, 4, user3.getId()));
        recipeRepository.save(new Recipe("Paneer Tikka Masala",
                "Paneer, Bell peppers, Onion, Tomato puree, Cream, Tikka masala, Ginger-garlic paste, Butter",
                "1. Cut paneer into cubes and marinate with spices.\n2. Grill or pan-fry paneer and peppers.\n3. Make gravy with onion, tomato puree, and cream.\n4. Add grilled paneer to the gravy.\n5. Simmer for 10 minutes.",
                "Dinner", 20, 25, 3, user3.getId()));
        recipeRepository.save(new Recipe("Masala Dosa",
                "Rice, Urad dal, Potatoes, Onions, Mustard seeds, Curry leaves, Turmeric, Green chillies",
                "1. Soak rice and dal overnight, grind to batter.\n2. Ferment batter for 8 hours.\n3. Make potato filling with spices.\n4. Spread batter on hot tawa.\n5. Add filling and fold.",
                "Breakfast", 15, 20, 2, user3.getId()));

        // ===== REMINDERS for User 3 =====
        reminderRepository.save(new Reminder("Weekly Vegetables", "Buy fresh vegetables from market",
                LocalDateTime.of(2026, 6, 21, 9, 0), "Shopping", true, user3.getId()));
        reminderRepository.save(new Reminder("Biryani Prep", "Marinate chicken for Sunday biryani",
                LocalDateTime.of(2026, 6, 21, 18, 0), "Cooking", true, user3.getId()));
        reminderRepository.save(new Reminder("Restock Spices", "Buy garam masala, turmeric, and chilli powder",
                LocalDateTime.of(2026, 6, 25, 11, 0), "Shopping", true, user3.getId()));
        reminderRepository.save(new Reminder("Monthly Budget Check", "Review food expenses for June",
                LocalDateTime.of(2026, 6, 30, 19, 0), "Finance", false, user3.getId()));
    }
}
