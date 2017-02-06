import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-color',
  template: `
    <form (ngSubmit)="onAdd()">
      <input [(ngModel)]="newColor" name="color" />
      <button type="submit">Add Color</button>
    </form>
  `
})
export class AddColorComponent {
  @Output() add = new EventEmitter();
  newColor = 'Please type your color';

  onAdd() {
    this.add.emit(this.newColor);
  }
}
