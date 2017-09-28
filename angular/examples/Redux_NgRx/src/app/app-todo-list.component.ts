import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TodoWithID } from './todos.service';

@Component({
  selector: 'app-todo-list',
  styles: [`.list-group { margin-top: 20px }`],
  template: `<ul class="list-group">
    <li *ngFor="let todo of todos" class="list-group-item">
      <div class="row">
        <div class="col-md-1">
          <input type="checkbox" [checked]="todo.done" (change)="onTodoToggle($event, todo.id, !todo.done)"/>
        </div>
        <span class="col-md-10">{{todo.title}}</span>
        <button type="button" class="btn btn-danger" (click)="onDelete(todo.id)">Delete</button>
      </div>
    </li>
  </ul>`
})
export class TodoListComponent {
  @Input() todos: Array<TodoWithID>;
  @Output() toggleTodo = new EventEmitter();
  @Output() deleteTodo = new EventEmitter();

  onTodoToggle(event: Event, id: number, newValue: boolean) {
    event.preventDefault();
    event.stopPropagation();
    this.toggleTodo.emit({
      id,
      done: newValue,
    });
  }

  onDelete(id: number) {
    this.deleteTodo.emit(id);
  }
}
