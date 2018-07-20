import { Component } from '@angular/core';

import { UserListService } from './user-list.service';

@Component({
  selector: 'app-users-list',
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let user of users">{{user.name}}</li>
    </ul>
  `
})
export class UserListComponent {
  users: Array<{ name: string; }> = [];
  constructor(private userList: UserListService) {
    this.users = userList.users;
  }
}
