import { Component } from '@angular/core';

// Must be defined as barrel in system-config.js
import { UserListService } from './user-list';

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <div class="col-xs-6">
        <app-users-list></app-users-list>
      </div>
      <div class="col-xs-6">
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let user of users">{{user.name}}</li>
        </ul>
      </div>
    </div>
  `,
})
export class AppComponent {
  users: Array<{ name: string; }> = [];
  constructor(private userList: UserListService) {
    this.users = userList.users;
  }
}
