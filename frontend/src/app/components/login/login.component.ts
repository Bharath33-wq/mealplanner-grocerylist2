import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isRegisterMode = false;
  showForgotPassword = false;

  // Login fields
  username = '';
  password = '';

  // Register fields
  regUsername = '';
  regPassword = '';
  regFullName = '';
  regEmail = '';

  // Forgot password fields
  forgotUsername = '';
  newPassword = '';
  confirmPassword = '';

  errorMessage = '';
  successMessage = '';
  isLoading = false;
  loadingMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode(): void {
    this.isRegisterMode = !this.isRegisterMode;
    this.showForgotPassword = false;
    this.errorMessage = '';
    this.successMessage = '';
  }

  openForgotPassword(): void {
    this.showForgotPassword = true;
    this.errorMessage = '';
    this.successMessage = '';
  }

  closeForgotPassword(): void {
    this.showForgotPassword = false;
    this.errorMessage = '';
    this.successMessage = '';
    this.forgotUsername = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  onLogin(): void {
    this.errorMessage = '';
    this.isLoading = true;
    this.loadingMessage = 'Connecting to server...';

    setTimeout(() => {
      if (this.isLoading) {
        this.loadingMessage = 'Server is waking up, please wait...';
      }
    }, 5000);

    setTimeout(() => {
      if (this.isLoading) {
        this.loadingMessage = 'Almost there...';
      }
    }, 15000);

    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        this.authService.setUser(response);
        this.router.navigate(['/dashboard/meal-plans']);
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Invalid username or password!';
        this.isLoading = false;
      }
    });
  }

  onRegister(): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;
    this.loadingMessage = 'Registering...';
    this.authService.register({
      username: this.regUsername,
      password: this.regPassword,
      fullName: this.regFullName,
      email: this.regEmail
    }).subscribe({
      next: () => {
        this.successMessage = 'Registration successful! Please sign in.';
        this.isLoading = false;
        this.regUsername = '';
        this.regPassword = '';
        this.regFullName = '';
        this.regEmail = '';
        setTimeout(() => {
          this.isRegisterMode = false;
          this.successMessage = '';
        }, 2000);
      },
      error: (err) => {
        this.errorMessage = err.status === 409 ? 'Username already exists!' : 'Registration failed. Please try again.';
        this.isLoading = false;
      }
    });
  }

  onResetPassword(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    if (this.newPassword.length < 4) {
      this.errorMessage = 'Password must be at least 4 characters!';
      return;
    }

    this.isLoading = true;
    this.loadingMessage = 'Resetting password...';
    this.authService.resetPassword(this.forgotUsername, this.newPassword).subscribe({
      next: () => {
        this.successMessage = 'Password reset successful! Please sign in.';
        this.isLoading = false;
        setTimeout(() => {
          this.closeForgotPassword();
        }, 2000);
      },
      error: () => {
        this.errorMessage = 'Username not found!';
        this.isLoading = false;
      }
    });
  }
}
