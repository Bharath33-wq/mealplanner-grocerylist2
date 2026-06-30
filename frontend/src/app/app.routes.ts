import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MealPlansComponent } from './components/meal-plans/meal-plans.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { BudgetTrackingComponent } from './components/budget-tracking/budget-tracking.component';
import { RecipeStorageComponent } from './components/recipe-storage/recipe-storage.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { IndianRecipesComponent } from './components/indian-recipes/indian-recipes.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'meal-plans', component: MealPlansComponent },
      { path: 'grocery-list', component: GroceryListComponent },
      { path: 'budget', component: BudgetTrackingComponent },
      { path: 'recipes', component: RecipeStorageComponent },
      { path: 'indian-recipes', component: IndianRecipesComponent },
      { path: 'reminders', component: RemindersComponent },
      { path: '', redirectTo: 'meal-plans', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
