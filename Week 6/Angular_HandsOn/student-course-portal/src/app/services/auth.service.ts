import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Angular signal — a reactive primitive that components can read
  // directly in their templates without subscribing/unsubscribing.
  private loggedIn = signal<boolean>(false);
  isLoggedIn = this.loggedIn.asReadonly();

  login(username: string, password: string): boolean {
    // Dummy credential check for the exercise.
    if (username && password) {
      this.loggedIn.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn.set(false);
  }
}
