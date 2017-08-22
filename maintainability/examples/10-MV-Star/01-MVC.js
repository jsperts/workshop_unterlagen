// Beispielimplementierung, es gibt auch andere Möglichkeiten
(function (document) {
  'use strict';

  // Used for the Observer Pattern
  class Observable {
    constructor() {
      this.listeners = [];
    }

    observe(cb) {
      this.listeners.push(cb);
    }

    notify(data) {
      this.listeners.forEach((listener) => {
        listener(data);
      });
    }
  }

  /* Model: start */
  class TodoModel {
    constructor(todos) {
      this.todos = todos;
      this.todoAdded = new Observable();
    }

    addTodo(todo) {
      this.todos.push(todo);
      this.todoAdded.notify(todo);
    }

    getTodos() {
      return this.todos;
    }
  }
  /* Model: end */

  /* Controller: start */
  class TodoController {
    constructor(model, view) {
      view.addButtonClicked.observe(function (todo) {
        model.addTodo(todo);
      });
    }
  }
  /* Controller: end */

  /* View: start */
  class TodosView {
    constructor(model, elements) {
      this.model = model;
      this.todosList = elements.list;
      this.addButtonClicked = new Observable();

      this.model.todoAdded.observe(() => {
        this.renderTodos();
      });

      elements.addButton.addEventListener('click', () => {
        this.addButtonClicked.notify(elements.inputField.value);
      });
    }

    renderTodos() {
      var todos = this.model.getTodos();
      // don't do this in production code, todo needs to be escaped
      var todosString = todos.map((todo) => `<li>${todo}</li>`).join('');
      this.todosList.innerHTML = todosString;
    }
  }
  /* View: end */

  // Bootstrap
  (function bootstrap() {
    var model = new TodoModel(['a', 'b', 'c']);
    var elements = {
      addButton: document.getElementById('addButton'),
      inputField: document.getElementById('inputField'),
      list: document.getElementById('todosList'),
    };
    var view = new TodosView(model, elements);
    var controller = new TodoController(model, view);
    view.renderTodos();
  })();
})(document);
