import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item-input',
  template: `
    <div class="form-inline">
      <input class="form-control" [(ngModel)]="newItem" />
      <button class="btn btn-primary" type="button" (click)="add()">Add</button>
    </div>
  `
})
export class ItemInputComponent {
  @Output() addItem: EventEmitter<string> = new EventEmitter();

  newItem = '';

  add() {
    this.addItem.emit(this.newItem);
  }
}
