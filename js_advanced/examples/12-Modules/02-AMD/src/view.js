define(function(require) {
  'use strict';
  var Observable = require('observable');

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

  // Interface
  return TodosView;
});