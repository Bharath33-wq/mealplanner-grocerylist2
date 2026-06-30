import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  sidebarCollapsed = false;

  menuItems = [
    { path: '/dashboard/meal-plans', icon: 'bi-calendar-week', label: 'Weekly Meal Plans' },
    { path: '/dashboard/grocery-list', icon: 'bi-cart-check', label: 'Grocery Checklist' },
    { path: '/dashboard/budget', icon: 'bi-wallet2', label: 'Budget Tracking' },
    { path: '/dashboard/recipes', icon: 'bi-book', label: 'Recipe Storage' },
    { path: '/dashboard/indian-recipes', icon: 'bi-fire', label: 'Indian Recipes' },
    { path: '/dashboard/reminders', icon: 'bi-bell', label: 'Reminders' }
  ];

  constructor(public authService: AuthService, private router: Router) {}

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
