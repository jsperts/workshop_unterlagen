import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
