import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MealPlan, GroceryItem, Budget, Recipe, Reminder } from '../models/models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Meal Plans
  getMealPlans(userId: number): Observable<MealPlan[]> {
    return this.http.get<MealPlan[]>(`${this.baseUrl}/meal-plans/user/${userId}`);
  }
  createMealPlan(plan: MealPlan): Observable<MealPlan> {
    return this.http.post<MealPlan>(`${this.baseUrl}/meal-plans`, plan);
  }
  updateMealPlan(id: number, plan: MealPlan): Observable<MealPlan> {
    return this.http.put<MealPlan>(`${this.baseUrl}/meal-plans/${id}`, plan);
  }
  deleteMealPlan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/meal-plans/${id}`);
  }

  // Grocery Items
  getGroceryItems(userId: number): Observable<GroceryItem[]> {
    return this.http.get<GroceryItem[]>(`${this.baseUrl}/grocery/user/${userId}`);
  }
  createGroceryItem(item: GroceryItem): Observable<GroceryItem> {
    return this.http.post<GroceryItem>(`${this.baseUrl}/grocery`, item);
  }
  updateGroceryItem(id: number, item: GroceryItem): Observable<GroceryItem> {
    return this.http.put<GroceryItem>(`${this.baseUrl}/grocery/${id}`, item);
  }
  deleteGroceryItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/grocery/${id}`);
  }

  // Budgets
  getBudgets(userId: number): Observable<Budget[]> {
    return this.http.get<Budget[]>(`${this.baseUrl}/budgets/user/${userId}`);
  }
  createBudget(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(`${this.baseUrl}/budgets`, budget);
  }
  updateBudget(id: number, budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(`${this.baseUrl}/budgets/${id}`, budget);
  }
  deleteBudget(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/budgets/${id}`);
  }

  // Recipes
  getRecipes(userId: number): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}/recipes/user/${userId}`);
  }
  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.baseUrl}/recipes`, recipe);
  }
  updateRecipe(id: number, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.baseUrl}/recipes/${id}`, recipe);
  }
  deleteRecipe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/recipes/${id}`);
  }

  // Reminders
  getReminders(userId: number): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${this.baseUrl}/reminders/user/${userId}`);
  }
  createReminder(reminder: Reminder): Observable<Reminder> {
    return this.http.post<Reminder>(`${this.baseUrl}/reminders`, reminder);
  }
  updateReminder(id: number, reminder: Reminder): Observable<Reminder> {
    return this.http.put<Reminder>(`${this.baseUrl}/reminders/${id}`, reminder);
  }
  deleteReminder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/reminders/${id}`);
  }
}
