import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <div class="row">
      <div class="col-md-10">
        <input class="form-control" type="text" [(ngModel)]="title"/>
      </div>
      <div class="col-md-2 text-right">
        <button type="button" class="btn btn-primary" (click)="onAddTodo()">Add Todo</button>
      </div>
    </div>
  `,
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter();
  title = '';

  onAddTodo() {
    this.addTodo.emit(this.title);
  }
}
