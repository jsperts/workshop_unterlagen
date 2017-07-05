import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <button class="btn btn-primary" type="button" (click)="add()">Add</button>
        <button class="btn btn-primary" type="button" (click)="changeName()">Change name</button>
        <button class="btn btn-primary" type="button" (click)="addWithRefChange()">Add with ref change</button>
      </div>
      <div class="col-xs-6">
        <h2>Impure Filter</h2>
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let item of (data | impureFilter)">{{item.name}}</li>
        </ul>
      </div>
      <div class="col-xs-6">
        <h2>Pure Filter</h2>
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let item of (data | pureFilter)">{{item.name}}</li>
        </ul>
      </div>
    </div>
  `,
})
export class AppComponent {
  data = [
    {name: 'Foo', isActive: false},
    {name: 'Bar', isActive: true},
    {name: 'Baz', isActive: false},
    {name: 'FooBar', isActive: true},
    {name: 'FooBaz', isActive: false}
  ];

  add() {
    this.data.unshift({
      name: new Date().toISOString(),
      isActive: true
    });
  }

  addWithRefChange() {
    const newObj = {
      name: new Date().toISOString(),
      isActive: true
    };
    this.data = [newObj, ...this.data];
  }

  changeName() {
    this.data[0].name = 'New name!';
  }
}
