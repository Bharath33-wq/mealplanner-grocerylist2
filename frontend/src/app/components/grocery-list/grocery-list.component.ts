import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { GroceryItem } from '../../models/models';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent implements OnInit {
  groceryItems: GroceryItem[] = [];
  showModal = false;
  isEditing = false;
  currentItem: GroceryItem = this.emptyItem();
  categories = ['Vegetables', 'Fruits', 'Meat', 'Seafood', 'Dairy', 'Grains', 'Bakery', 'Pantry', 'Beverages', 'Snacks', 'Other'];

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.apiService.getGroceryItems(this.authService.getUserId()).subscribe(data => {
      this.groceryItems = data;
    });
  }

  emptyItem(): GroceryItem {
    return { itemName: '', category: '', quantity: '', purchased: false, userId: this.authService?.getUserId() || 0 };
  }

  openAdd(): void {
    this.isEditing = false;
    this.currentItem = this.emptyItem();
    this.showModal = true;
  }

  openEdit(item: GroceryItem): void {
    this.isEditing = true;
    this.currentItem = { ...item };
    this.showModal = true;
  }

  save(): void {
    if (this.isEditing && this.currentItem.id) {
      this.apiService.updateGroceryItem(this.currentItem.id, this.currentItem).subscribe(() => {
        this.loadItems();
        this.showModal = false;
      });
    } else {
      this.apiService.createGroceryItem(this.currentItem).subscribe(() => {
        this.loadItems();
        this.showModal = false;
      });
    }
  }

  togglePurchased(item: GroceryItem): void {
    item.purchased = !item.purchased;
    this.apiService.updateGroceryItem(item.id!, item).subscribe();
  }

  delete(id: number): void {
    if (confirm('Remove this item from the grocery list?')) {
      this.apiService.deleteGroceryItem(id).subscribe(() => this.loadItems());
    }
  }

  get purchasedCount(): number {
    return this.groceryItems.filter(i => i.purchased).length;
  }

  get totalCount(): number {
    return this.groceryItems.length;
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Vegetables': 'bi-flower1', 'Fruits': 'bi-apple', 'Meat': 'bi-fire',
      'Seafood': 'bi-water', 'Dairy': 'bi-cup-hot', 'Grains': 'bi-archive',
      'Bakery': 'bi-shop', 'Pantry': 'bi-box', 'Beverages': 'bi-cup-straw',
      'Snacks': 'bi-cookie', 'Other': 'bi-bag'
    };
    return icons[category] || 'bi-bag';
  }
}
