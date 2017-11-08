import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do'

import { fromPromise } from 'rxjs/observable/fromPromise';
import { mergeMap, map, mapTo, tap } from 'rxjs/operators';

import { TodosService, Todo, TodoWithID } from './todos.service';

export const ADD = 'ADD';
export const ADDED = 'ADDED';
export const UPDATE = 'UPDATE';
export const UPDATED = 'UPDATED';
export const GET_ALL = 'GET_ALL';
export const GOT_ALL = 'GOT_ALL';
export const REMOVE = 'REMOVE';
export const REMOVED = 'REMOVED';

export class Add implements Action {
  readonly type = ADD;

  constructor(public payload: Todo) {}
}

export class Added implements Action {
  readonly type = ADDED;

  constructor(public payload: TodoWithID) {}
}

export class Update implements Action {
  readonly type = UPDATE;

  constructor(public payload: {id: number, done: boolean }) {}
}

export class Updated implements Action {
  readonly type = UPDATED;

  constructor(public payload: TodoWithID) {}
}

export class GetAll implements Action {
  readonly type = GET_ALL;
}

export class GotAll implements Action {
  readonly type = GOT_ALL;

  constructor(public payload: Array<TodoWithID>) {}
}

export class Remove implements Action {
  readonly type = REMOVE;

  constructor(public payload: TodoWithID['id']) {}
}

export class Removed implements Action {
  readonly type = REMOVED;

  constructor(public payload: TodoWithID['id']) {}
}


@Injectable()
export class AppActions {
  @Effect() getAll$ = this.actions$
      .ofType(GET_ALL)
      .pipe(
          mergeMap(() => fromPromise(this.todosService.getAll())),
          map((data: Array<TodoWithID>) => new GotAll(data))
      );

  @Effect() update$ = this.actions$
      .ofType(UPDATE)
      .pipe(
          mergeMap((action: Update) => fromPromise(this.todosService.update(action.payload.id, {done: action.payload.done}))
              .pipe(
                  map(() => ({
                    id: action.payload.id,
                    done: action.payload.done,
                  }))
              )
          ),
          map((todo: TodoWithID) => new Updated(todo))
      );

  @Effect() add$ = this.actions$
      .ofType(ADD)
      .pipe(
          mergeMap((action: Add) => fromPromise(this.todosService.add(action.payload))
            .pipe(
                  map((id) => Object.assign({id}, action.payload))
            )
          ),
          map((todo: TodoWithID) => new Added(todo))
      );

  @Effect() remove$ = this.actions$
      .ofType(REMOVE)
      .pipe(
          mergeMap((action: Remove) => fromPromise(this.todosService.remove(action.payload))
            .pipe(
                  mapTo(action.payload)
            )
          ),
          map((id: TodoWithID['id']) => new Removed(id))
      );

  constructor(private todosService: TodosService,
              private actions$: Actions) {
  }
}

export type allActions = Add | Added | Update | Updated | GetAll | GotAll | Remove | Removed;
