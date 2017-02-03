import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TodoWithID } from './todos.service';

@Component({
  selector: 'app-todo-list',
  styles: [`ul li { list-style: none; }`],
  template: `<ul>
    <li *ngFor="let todo of todos">
      <input type="checkbox" [checked]="todo.done" (change)="onTodoToggle($event, todo.id, !todo.done)"/>
      <span>{{todo.title}}</span>
      <button type="button" (click)="onDelete(todo.id)">Delete</button>
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
