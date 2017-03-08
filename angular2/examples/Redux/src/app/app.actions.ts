import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import { TodosService, Todo, TodoWithID } from './todos.service';
import { AppState } from './app.store';

export enum actions {
  ADD,
  GET_ALL,
  REMOVE,
  UPDATE
}

export interface Action {
  type: actions;
  payload?: any;
}

@Injectable()
export class AppActions {
  constructor(private todosService: TodosService,
              private ngRedux: NgRedux<AppState>) {
  }

  add(data: Todo) {
    this.todosService.add(data)
        .then((id) => {
          this.ngRedux.dispatch({
            type: actions.ADD,
            payload: Object.assign({id}, data),
          });
        });
  }

  remove(id: number) {
    this.todosService.remove(id)
        .then(() => {
          this.ngRedux.dispatch({
            type: actions.REMOVE,
            payload: id,
          });
        });
  }

  getAll() {
    this.todosService.getAll()
        .then((data) => {
          this.ngRedux.dispatch({
            type: actions.GET_ALL,
            payload: data,
          });
        });
  }

  update(id: number, data: { done: boolean }) {
    this.todosService.update(id, data)
        .then(() => {
          this.ngRedux.dispatch({
            type: actions.UPDATE,
            payload: {
              id,
              done: data.done,
            },
          });
        });
  }
}
