import { TodoWithID } from './todos.service';

export interface AppState {
  todos: Array<TodoWithID>;
}

export const initialState: AppState = {
  todos: [],
};
