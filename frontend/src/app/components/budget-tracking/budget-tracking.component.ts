import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Budget } from '../../models/models';

@Component({
  selector: 'app-budget-tracking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-tracking.component.html',
  styleUrl: './budget-tracking.component.css'
})
export class BudgetTrackingComponent implements OnInit {
  budgets: Budget[] = [];
  showModal = false;
  isEditing = false;
  currentBudget: Budget = this.emptyBudget();
  categories = ['Groceries', 'Dining Out', 'Snacks', 'Beverages', 'Meal Prep', 'Other'];

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadBudgets();
  }

  loadBudgets(): void {
    this.apiService.getBudgets(this.authService.getUserId()).subscribe(data => {
      this.budgets = data;
    });
  }

  emptyBudget(): Budget {
    return { category: '', amount: 0, spent: 0, date: new Date().toISOString().split('T')[0], userId: this.authService?.getUserId() || 0 };
  }

  openAdd(): void {
    this.isEditing = false;
    this.currentBudget = this.emptyBudget();
    this.showModal = true;
  }

  openEdit(budget: Budget): void {
    this.isEditing = true;
    this.currentBudget = { ...budget };
    this.showModal = true;
  }

  save(): void {
    if (this.isEditing && this.currentBudget.id) {
      this.apiService.updateBudget(this.currentBudget.id, this.currentBudget).subscribe(() => {
        this.loadBudgets();
        this.showModal = false;
      });
    } else {
      this.apiService.createBudget(this.currentBudget).subscribe(() => {
        this.loadBudgets();
        this.showModal = false;
      });
    }
  }

  delete(id: number): void {
    if (confirm('Delete this budget entry?')) {
      this.apiService.deleteBudget(id).subscribe(() => this.loadBudgets());
    }
  }

  get totalBudget(): number {
    return this.budgets.reduce((sum, b) => sum + b.amount, 0);
  }

  get totalSpent(): number {
    return this.budgets.reduce((sum, b) => sum + b.spent, 0);
  }

  get totalRemaining(): number {
    return this.totalBudget - this.totalSpent;
  }

  getPercentage(budget: Budget): number {
    return budget.amount > 0 ? Math.min((budget.spent / budget.amount) * 100, 100) : 0;
  }

  getStatusClass(budget: Budget): string {
    const pct = this.getPercentage(budget);
    if (pct >= 90) return 'danger';
    if (pct >= 70) return 'warning';
    return 'success';
  }
}
