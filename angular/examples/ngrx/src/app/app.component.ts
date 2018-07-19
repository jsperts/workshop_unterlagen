import { Component, OnInit } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoWithID, Todo } from './todos.service';
import { GetAll, Add, Update, Remove } from './app.actions';
import { AppState } from './app.store';

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
  todos$: Observable<AppState>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetAll());
    this.todos$ = this.store.select(createFeatureSelector('app'));
    this.todos$.subscribe((state) => {
      this.todosList = state.todos;
    });
  }

  onAddTodo(title: string) {
    const todo: Todo = {
      title,
      done: false,
    };
    this.store.dispatch(new Add(todo));
  }

  onToggleTodo({ id, done }: { id: number, done: boolean }) {
    this.store.dispatch(new Update({ id, done }));
  }

  onDeleteTodo(id: number) {
    this.store.dispatch(new Remove(id));
  }
}
