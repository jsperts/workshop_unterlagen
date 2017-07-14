import { Component } from '@angular/core';

import { ListService } from './list.service';

@Component({
  selector: 'app-adder',
  template: `
    <h2>Adder</h2>
    <button class="btn btn-primary" (click)="add()">Add Element</button>
  `
})
export class AdderComponent {
  constructor(private list: ListService) {}

  add() {
    this.list.add(Math.random());
  }
}
