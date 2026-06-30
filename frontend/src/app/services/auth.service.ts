import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../models/models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, request);
  }

  register(user: { username: string; password: string; fullName: string; email: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/register`, user);
  }

  resetPassword(username: string, newPassword: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/reset-password`, { username, newPassword });
  }

  setUser(response: LoginResponse): void {
    sessionStorage.setItem('userId', String(response.userId));
    sessionStorage.setItem('username', response.username);
    sessionStorage.setItem('fullName', response.fullName);
  }

  getUserId(): number {
    return Number(sessionStorage.getItem('userId'));
  }

  getFullName(): string {
    return sessionStorage.getItem('fullName') || '';
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('userId');
  }

  logout(): void {
    sessionStorage.clear();
  }
}
