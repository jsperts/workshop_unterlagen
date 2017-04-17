import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['.active { color: red !important; }'],
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
            <li><a routerLink="/about" routerLinkActive="active">About</a></li>
            <li><a routerLink="/admin" routerLinkActive="active">Admin</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
