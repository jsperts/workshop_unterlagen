import { Reducer } from 'redux';

import { initialState, AppState } from './app.store';
import { Actions, actions } from './app.actions';
import { TodoWithID } from './todos.service';

export const appReducer: Reducer<AppState> = function appReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case actions.ADD: return { todos: [...state.todos, action.payload] };
    case actions.UPDATE: return { todos: [
      ...state.todos.filter((todo) => todo.id !== action.payload.id),
      Object.assign(
        {},
        // object to update
        // We will always find an object here, use assertion to exclude undefined
        <TodoWithID>state.todos.find((todo) => todo.id === action.payload.id),
        { done: action.payload.done }
      ),
    ] };
    case actions.GET_ALL: return { todos: action.payload };
    case actions.REMOVE: return {
      todos: state.todos.filter((todo) => todo.id !== action.payload)
    };
    default: return state;
  }
};
