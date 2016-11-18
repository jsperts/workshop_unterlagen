import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class CanLoadGuardService implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route) {
    console.log('canLoad');
    return this.isLoggedIn(`/${route.path}`);
  }

  isLoggedIn(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }
}
