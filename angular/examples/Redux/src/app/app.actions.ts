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

interface Action {
  type: actions,
  payload: any,
  error?: boolean,
  meta?: any,
}

interface AddAction extends Action {
  type: actions.ADD;
  payload: TodoWithID;
}

interface UpdateAction extends Action {
  type: actions.UPDATE;
  payload: TodoWithID;
}

interface GetAction extends Action {
  type: actions.GET_ALL;
  payload: Array<TodoWithID>;
}

interface RemoveAction extends Action {
  type: actions.REMOVE;
  payload: TodoWithID['id']
}

export type Actions = AddAction | UpdateAction | GetAction | RemoveAction;

function createAction<T>(type: actions) {
  return (payload: T) => ({
    type,
    payload,
  });
}

const createAddAction = createAction<TodoWithID>(actions.ADD);
const createUpdateAction = createAction<TodoWithID>(actions.UPDATE);
const createRemoveAction = createAction<TodoWithID['id']>(actions.REMOVE);
const createGetAction = createAction<Array<TodoWithID>>(actions.GET_ALL);

@Injectable()
export class AppActions {
  constructor(private todosService: TodosService,
              private ngRedux: NgRedux<AppState>) {
  }

  add(data: Todo) {
    this.todosService.add(data)
        .then((id) => {
          this.ngRedux.dispatch(createAddAction(Object.assign({id}, data)));
        });
  }

  remove(id: number) {
    this.todosService.remove(id)
        .then(() => {
          this.ngRedux.dispatch(createRemoveAction(id));
        });
  }

  getAll() {
    this.todosService.getAll()
        .then((data) => {
          this.ngRedux.dispatch(createGetAction(data));
        });
  }

  update(id: number, data: { done: boolean }) {
    this.todosService.update(id, data)
        .then(() => {
          this.ngRedux.dispatch(createUpdateAction({
                id,
                done: data.done,
              }));
        });
  }
}
