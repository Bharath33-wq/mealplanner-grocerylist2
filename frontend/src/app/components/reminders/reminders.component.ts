import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Reminder } from '../../models/models';

@Component({
  selector: 'app-reminders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reminders.component.html',
  styleUrl: './reminders.component.css'
})
export class RemindersComponent implements OnInit {
  reminders: Reminder[] = [];
  showModal = false;
  isEditing = false;
  currentReminder: Reminder = this.emptyReminder();
  types = ['Shopping', 'Cooking', 'Planning', 'Finance', 'Other'];

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadReminders();
  }

  loadReminders(): void {
    this.apiService.getReminders(this.authService.getUserId()).subscribe(data => {
      this.reminders = data;
    });
  }

  emptyReminder(): Reminder {
    return { title: '', description: '', reminderTime: '', type: '', active: true, userId: this.authService?.getUserId() || 0 };
  }

  openAdd(): void {
    this.isEditing = false;
    this.currentReminder = this.emptyReminder();
    this.showModal = true;
  }

  openEdit(reminder: Reminder): void {
    this.isEditing = true;
    this.currentReminder = { ...reminder };
    this.showModal = true;
  }

  save(): void {
    if (this.isEditing && this.currentReminder.id) {
      this.apiService.updateReminder(this.currentReminder.id, this.currentReminder).subscribe(() => {
        this.loadReminders();
        this.showModal = false;
      });
    } else {
      this.apiService.createReminder(this.currentReminder).subscribe(() => {
        this.loadReminders();
        this.showModal = false;
      });
    }
  }

  toggleActive(reminder: Reminder): void {
    reminder.active = !reminder.active;
    this.apiService.updateReminder(reminder.id!, reminder).subscribe();
  }

  delete(id: number): void {
    if (confirm('Delete this reminder?')) {
      this.apiService.deleteReminder(id).subscribe(() => this.loadReminders());
    }
  }

  get activeCount(): number {
    return this.reminders.filter(r => r.active).length;
  }

  getTypeIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'Shopping': 'bi-cart', 'Cooking': 'bi-fire', 'Planning': 'bi-calendar-check',
      'Finance': 'bi-cash-coin', 'Other': 'bi-bell'
    };
    return icons[type] || 'bi-bell';
  }

  getTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      'Shopping': '#2196f3', 'Cooking': '#ff9800', 'Planning': '#4caf50',
      'Finance': '#9c27b0', 'Other': '#607d8b'
    };
    return colors[type] || '#4caf50';
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
}
