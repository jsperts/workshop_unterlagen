import {Component, View, EventEmitter} from 'angular2/core';

@Component({
  selector: 'todo-item',
  properties: ['todo'],
  outputs: ['todoUpdated', 'todoRemoved']
})
@View({
  template: `
    <input type="checkbox" [checked]="todo.checked" [id]="todo.id" (click)="onChecked()"/>
    <label [attr.for]="todo.id">{{todo.title}}</label>
    <span class="close" (click)="remove()">X</span>
  `,
  styles: [`
    input[type=checkbox] {
      margin-top: 8px;
    }

    .close {
      float: right;
      margin-top: 6px;
      margin-right: 6px;
      cursor: pointer;
      color: red;
    }
  `]
})
class TodoItem {
  constructor() {
    this.todoUpdated = new EventEmitter();
    this.todoRemoved = new EventEmitter();
  }

  onChecked() {
    this.todo.checked = !this.todo.checked;
    this.todoUpdated.next(this.todo);
  }

  remove() {
    this.todoRemoved.emit(this.todo._id);
  }
}

export default TodoItem;
