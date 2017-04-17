import {
  Store,
  createStore
} from 'redux';

import { TodoWithID } from './todos.service';
import { appReducer } from './app.reducer';

export interface AppState {
  todos: Array<TodoWithID>;
}

export const initialState: AppState = {
  todos: [],
};

export const store: Store<AppState> = createStore(appReducer);
