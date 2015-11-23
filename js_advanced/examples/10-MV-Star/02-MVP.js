// Beispielimplementierung, es gibt auch andere möglichkeiten
(function(document) {
  'use strict';

  // Used for the Observer Pattern
  function Observable() {
    this._listeners = [];
  }
  Observable.prototype.observe = function(cb){
    this._listeners.push(cb);
  };

  Observable.prototype.notify = function(data) {
    this._listeners.forEach(function(listener) {
      listener(data);
    });
  };

  /* Model: start */
  function TodoModel(todos) {
    this._todos = todos;
    this.todoAdded = new Observable();
  }

  TodoModel.prototype.addTodo = function(todo) {
    this._todos.push(todo);
    this.todoAdded.notify(todo);
  };

  TodoModel.prototype.getTodos = function() {
    return this._todos;
  };
  /* Model: end */

  /* Presenter: start */
  function TodoPresenter(model, view) {
    this._model = model;
    this._view = view;
    view.addButtonClicked.observe(function(todo) {
      model.addTodo(todo);
    });
    model.todoAdded.observe(function(todos) {
      view.renderTodos(model.getTodos());
    });
  }

  TodoPresenter.prototype.renderTodos = function() {
    this._view.renderTodos(this._model.getTodos());
  };
  /* Presenter: end */

  /* View: start */

  function TodosView(elements) {
    this._todosList = elements.list;
    this.addButtonClicked = new Observable();

    var self = this;

    elements.addButton.addEventListener('click', function() {
      self.addButtonClicked.notify(elements.inputField.value);
    });
  }

  TodosView.prototype.renderTodos = function(todos) {
    var todosString = todos.map(function(todo) {
      return '<li>' + todo + '</li>';
    }).join('');
    this._todosList.innerHTML = todosString;
  };
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
