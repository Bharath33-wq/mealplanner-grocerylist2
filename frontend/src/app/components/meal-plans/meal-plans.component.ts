import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { MealPlan } from '../../models/models';

@Component({
  selector: 'app-meal-plans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meal-plans.component.html',
  styleUrl: './meal-plans.component.css'
})
export class MealPlansComponent implements OnInit {
  mealPlans: MealPlan[] = [];
  showModal = false;
  isEditing = false;
  currentPlan: MealPlan = this.emptyPlan();
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadMealPlans();
  }

  loadMealPlans(): void {
    this.apiService.getMealPlans(this.authService.getUserId()).subscribe(data => {
      this.mealPlans = data;
    });
  }

  emptyPlan(): MealPlan {
    return { dayOfWeek: '', breakfast: '', lunch: '', dinner: '', snacks: '', userId: this.authService?.getUserId() || 0 };
  }

  openAdd(): void {
    this.isEditing = false;
    this.currentPlan = this.emptyPlan();
    this.showModal = true;
  }

  openEdit(plan: MealPlan): void {
    this.isEditing = true;
    this.currentPlan = { ...plan };
    this.showModal = true;
  }

  save(): void {
    if (this.isEditing && this.currentPlan.id) {
      this.apiService.updateMealPlan(this.currentPlan.id, this.currentPlan).subscribe(() => {
        this.loadMealPlans();
        this.showModal = false;
      });
    } else {
      this.apiService.createMealPlan(this.currentPlan).subscribe(() => {
        this.loadMealPlans();
        this.showModal = false;
      });
    }
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this meal plan?')) {
      this.apiService.deleteMealPlan(id).subscribe(() => this.loadMealPlans());
    }
  }

  getMealIcon(meal: string): string {
    if (meal.toLowerCase().includes('chicken') || meal.toLowerCase().includes('beef') || meal.toLowerCase().includes('steak')) return 'bi-fire';
    if (meal.toLowerCase().includes('salad') || meal.toLowerCase().includes('veggie')) return 'bi-leaf';
    if (meal.toLowerCase().includes('smoothie') || meal.toLowerCase().includes('yogurt')) return 'bi-cup-straw';
    return 'bi-egg-fried';
  }
}
