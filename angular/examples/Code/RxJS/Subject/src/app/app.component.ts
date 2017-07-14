import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['.active { color: red !important; }'],
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a routerLink="/list1" routerLinkActive="active">List 1</a></li>
            <li><a routerLink="/list2" routerLinkActive="active">List 2</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
