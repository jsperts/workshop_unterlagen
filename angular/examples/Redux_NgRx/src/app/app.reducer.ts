import { initialState, AppState } from './app.store';
import * as Actions from './app.actions';
import { TodoWithID } from './todos.service';

export function appReducer(state = initialState, action: Actions.allActions): AppState {
  switch (action.type) {
    case Actions.ADDED: return { todos: [...state.todos, action.payload] };
    case Actions.UPDATED: return { todos: [
      ...state.todos.filter((todo) => todo.id !== action.payload.id),
      Object.assign(
        {},
        // object to update
        // We will always find an object here, use assertion to exclude undefined
        <TodoWithID>state.todos.find((todo) => todo.id === action.payload.id),
        { done: action.payload.done }
      ),
    ] };
    case Actions.GOT_ALL: return { todos: action.payload };
    case Actions.REMOVED: return {
      todos: state.todos.filter((todo) => todo.id !== action.payload)
    };
    default: return state;
  }
}
