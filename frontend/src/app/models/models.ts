export interface User {
  id: number;
  username: string;
  fullName: string;
  email: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  userId: number;
  username: string;
  fullName: string;
  message: string;
}

export interface MealPlan {
  id?: number;
  dayOfWeek: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string;
  userId: number;
}

export interface GroceryItem {
  id?: number;
  itemName: string;
  category: string;
  quantity: string;
  purchased: boolean;
  userId: number;
}

export interface Budget {
  id?: number;
  category: string;
  amount: number;
  spent: number;
  date: string;
  userId: number;
}

export interface Recipe {
  id?: number;
  title: string;
  ingredients: string;
  instructions: string;
  category: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  userId: number;
}

export interface Reminder {
  id?: number;
  title: string;
  description: string;
  reminderTime: string;
  type: string;
  active: boolean;
  userId: number;
}
