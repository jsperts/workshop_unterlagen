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

  /* Controller: start */
  function TodoController(model, view) {
    view.addButtonClicked.observe(function(todo) {
      model.addTodo(todo);
    });
  }
  /* Controller: end */

  /* View: start */

  function TodosView(model, elements) {
    this._model = model;
    this._todosList = elements.list;
    this.addButtonClicked = new Observable();

    var self = this;

    this._model.todoAdded.observe(function() {
      self.renderTodos();
    });

    elements.addButton.addEventListener('click', function() {
      self.addButtonClicked.notify(elements.inputField.value);
    });
  }

  TodosView.prototype.renderTodos = function() {
    var todos = this._model.getTodos();
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
    var view = new TodosView(model, elements);
    var controller = new TodoController(model, view);
    view.renderTodos();
  })();
})(document);
