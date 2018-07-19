import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { TodoWithID, Todo } from './todos.service';
import { AppActions } from './app.actions';

@Component({
  selector: 'app-root',
  template: `<div>
    <app-add-todo (addTodo)="onAddTodo($event)"></app-add-todo>
    <app-todo-list
      [todos]="todosList"
      (toggleTodo)="onToggleTodo($event)"
      (deleteTodo)="onDeleteTodo($event)"
    ></app-todo-list>
  </div>`,
})
export class AppComponent implements OnInit {
  todosList: Array<TodoWithID> = [];
  @select('todos') todos$: Observable<Array<TodoWithID>>;

  constructor(private actions: AppActions) {}

  ngOnInit() {
    this.actions.getAll();
    this.todos$.subscribe((todos) => {
      this.todosList = todos;
    });
  }

  onAddTodo(title: string) {
    const todo: Todo = {
      title,
      done: false,
    };
    this.actions.add(todo);
  }

  onToggleTodo({ id, done }: { id: number, done: boolean }) {
    this.actions.update(id, { done });
  }

  onDeleteTodo(id: number) {
    this.actions.remove(id);
  }
}
