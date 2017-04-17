import { Component } from '@angular/core';

@Component({
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a routerLink="./products" routerLinkActive="active">Products</a></li>
            <li><a routerLink="./users" routerLinkActive="active">Users</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {}
