// Beispielimplementierung, es gibt auch andere Möglichkeiten
(function (document) {
  'use strict';

  /* Dispatcher: start */
  // Offizielle Flux-Dispatcher: https://github.com/facebook/flux
  var dispatcher = {
    callbacks: [],
    register: function (cb) {
      this.callbacks.push(cb);
    },
    dispatch: function (payload) {
      this.callbacks.forEach(function (cb) {
        cb(payload);
      });
    },
  };
  /* Dispatcher: end */

  var TODO_ADDED_ACTION = 'todoAdded';
  var INIT_ACTION = 'init';

  /* Store: start */
  var todoStore = (function (dispatcher) {
    var todos = ['a', 'b', 'c'];
    var callbacks = [];

    function triggerChange(data) {
      callbacks.forEach(function (cb) {
        cb(data);
      });
    }

    function addTodo(todo) {
      todos.push(todo);
      triggerChange(todos);
    }

    function init() {
      triggerChange(todos);
    }

    var actionHandlers = {};
    actionHandlers[INIT_ACTION] = init;
    actionHandlers[TODO_ADDED_ACTION] = addTodo;

    dispatcher.register(function (action) {
      var actionType = action.actionType;
      var data = action.data;

      var actionHandler = actionHandlers[actionType];
      if (actionHandler) {
        actionHandler(data);
      }
    });

    function addChangeListener(cb) {
      callbacks.push(cb);
    }

    return {
      addChangeListener: addChangeListener,
    };
  })(dispatcher);
  /* Store: end */

  /* Actions: start */
  var todoActions = (function (dispatcher) {
    function addTodo(todo) {
      dispatcher.dispatch({
        actionType: TODO_ADDED_ACTION,
        data: todo,
      });
    }

    function init() {
      dispatcher.dispatch({
        actionType: INIT_ACTION,
      });
    }
    return {
      addTodo: addTodo,
      init: init,
    };
  })(dispatcher);
  /* Action: end */

  /* View: start */
  class TodosView {
    constructor(todoActions, todoStore, elements) {
      elements.addButton.addEventListener('click', () => {
        todoActions.addTodo(elements.inputField.value);
      });

      function renderTodos(todos) {
        var todosString = todos.map(function (todo) {
          return `<li>${todo}</li>`;
        }).join('');
        elements.list.innerHTML = todosString;
      }

      todoStore.addChangeListener((todos) => {
        renderTodos(todos);
      });
    }
  }
  /* View: end */

  // Bootstrap
  (function bootstrap() {
    var elements = {
      addButton: document.getElementById('addButton'),
      inputField: document.getElementById('inputField'),
      list: document.getElementById('todosList'),
    };
    var view = new TodosView(todoActions, todoStore, elements);
    todoActions.init();
  })();
})(document);
