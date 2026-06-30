import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Recipe } from '../../models/models';

@Component({
  selector: 'app-recipe-storage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-storage.component.html',
  styleUrl: './recipe-storage.component.css'
})
export class RecipeStorageComponent implements OnInit {
  recipes: Recipe[] = [];
  showModal = false;
  showDetailModal = false;
  isEditing = false;
  currentRecipe: Recipe = this.emptyRecipe();
  selectedRecipe: Recipe | null = null;
  categories = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Appetizer'];

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.apiService.getRecipes(this.authService.getUserId()).subscribe(data => {
      this.recipes = data;
    });
  }

  emptyRecipe(): Recipe {
    return { title: '', ingredients: '', instructions: '', category: '', prepTime: 0, cookTime: 0, servings: 1, userId: this.authService?.getUserId() || 0 };
  }

  openAdd(): void {
    this.isEditing = false;
    this.currentRecipe = this.emptyRecipe();
    this.showModal = true;
  }

  openEdit(recipe: Recipe): void {
    this.isEditing = true;
    this.currentRecipe = { ...recipe };
    this.showModal = true;
  }

  viewRecipe(recipe: Recipe): void {
    this.selectedRecipe = recipe;
    this.showDetailModal = true;
  }

  save(): void {
    if (this.isEditing && this.currentRecipe.id) {
      this.apiService.updateRecipe(this.currentRecipe.id, this.currentRecipe).subscribe(() => {
        this.loadRecipes();
        this.showModal = false;
      });
    } else {
      this.apiService.createRecipe(this.currentRecipe).subscribe(() => {
        this.loadRecipes();
        this.showModal = false;
      });
    }
  }

  delete(id: number): void {
    if (confirm('Delete this recipe?')) {
      this.apiService.deleteRecipe(id).subscribe(() => this.loadRecipes());
    }
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Breakfast': '#ff9800', 'Lunch': '#4caf50', 'Dinner': '#2196f3',
      'Snack': '#e91e63', 'Dessert': '#9c27b0', 'Appetizer': '#00bcd4'
    };
    return colors[category] || '#4caf50';
  }
}
