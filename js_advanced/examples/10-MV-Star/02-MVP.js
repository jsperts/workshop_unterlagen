// Beispielimplementierung, es gibt auch andere Möglichkeiten
(function(document) {
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
    };
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

  /* Presenter: start */
  class TodoPresenter {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      view.addButtonClicked.observe((todo) => {
        model.addTodo(todo);
      });
      model.todoAdded.observe((todos) => {
        view.renderTodos(model.getTodos());
      });
    }

    renderTodos() {
      this.view.renderTodos(this.model.getTodos());
    }
  }
  /* Presenter: end */

  /* View: start */
  class TodosView {
    constructor(elements) {
      this.todosList = elements.list;
      this.addButtonClicked = new Observable();

      elements.addButton.addEventListener('click', () => {
        this.addButtonClicked.notify(elements.inputField.value);
      });
    }

    renderTodos(todos) {
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
      list: document.getElementById('todosList')
    };
    var view = new TodosView(elements);
    var presenter = new TodoPresenter(model, view);
    presenter.renderTodos();
  })();
})(document);
