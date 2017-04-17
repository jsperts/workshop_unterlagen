import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Manage Users</h1>
    <button type="button" (click)="change()">Simulate Change</button>
    <button type="button" (click)="save()">Simulate Save</button>
  `
})
export class ManageUsersComponent {
  isChanged = false;

  change() {
    this.isChanged = true;
  }

  save() {
    this.isChanged = false;
  }

  hasChanges() {
    return this.isChanged;
  }
}
