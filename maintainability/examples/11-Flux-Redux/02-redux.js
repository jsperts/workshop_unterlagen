// Beispielimplementierung, es gibt auch andere Möglichkeiten
(function (document) {
  'use strict';

  /* State: start */
  const initialState = {
    todos: [
      'a',
      'b',
      'c',
    ],
  };
  /* State: end */

  /* Redux actions or events: start */
  const TODO_ADDED = 'todoAdded';
  const INIT = 'init';
  /* Redux actions or events: end */

  /* Reducer: start */
  function reducer(state, action) {
    const { type, payload } = action;

    switch (type) {
      case INIT:
        return initialState;
      case TODO_ADDED:
        return Object.assign(
          {},
          state,
          {
            todos: [...state.todos, payload],
          }
        );
      default:
        console.log('Unsupported action:', action);
        return state;
    }
  }
  /* Reducer: end */

  /* Store: start */
  function createStore(reducer) {
    return window.Redux.createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  /* Store: end */

  /* Redux bound action creators or actions: start */
  function bindActions(dispatch) {
    function addTodo(todo) {
      dispatch({
        type: TODO_ADDED,
        payload: todo,
      });
    }

    function init() {
      dispatch({
        type: INIT,
      });
    }

    return {
      addTodo: addTodo,
      init: init,
    };
  }
  /* Redux bound action creators or actions: end */

  /* View: start */
  class TodosView {
    constructor(actions, store, elements) {
      elements.addButton.addEventListener('click', () => {
        actions.addTodo(elements.inputField.value);
      });

      function renderTodos(todos) {
        const todosString = todos.map(function (todo) {
          return `<li>${todo}</li>`;
        }).join('');
        elements.list.innerHTML = todosString;
      }

      store.subscribe(() => {
        const state = store.getState();
        renderTodos(state.todos);
      });
    }
  }
  /* View: end */

  // Bootstrap
  (function bootstrap() {
    const elements = {
      addButton: document.getElementById('addButton'),
      inputField: document.getElementById('inputField'),
      list: document.getElementById('todosList'),
    };
    const store = createStore(reducer);
    const actions = bindActions(store.dispatch);
    const view = new TodosView(actions, store, elements); // eslint-disable-line no-unused-vars
    actions.init();
  })();
})(document);
