import { initialState } from './app.store';
import { Action, actions } from './app.actions';

export function appReducer(state = initialState, { type, payload }: Action) {
  switch (type) {
    case actions.ADD: return { todos: [...state.todos, payload] };
    case actions.UPDATE: return { todos: [
      ...state.todos.filter((todo) => todo.id !== payload.id),
      Object.assign(
        {},
        // object to update
        state.todos.find((todo) => todo.id === payload.id),
        { done: payload.done }
      ),
    ] };
    case actions.GET_ALL: return { todos: payload };
    case actions.REMOVE: return {
      todos: state.todos.filter((todo) => todo.id !== payload)
    };
    default: return state;
  }
}
