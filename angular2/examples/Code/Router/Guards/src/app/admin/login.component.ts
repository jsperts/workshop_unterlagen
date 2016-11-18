import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  template: `
    <button type="button" (click)="login()">Login</button>
  `
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login();
    if (this.authService.redirectUrl) {
      this.router.navigateByUrl(this.authService.redirectUrl);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
