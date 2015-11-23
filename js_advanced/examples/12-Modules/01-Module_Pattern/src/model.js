var TodoModel = (function(Observable) {
  'use strict';

  // private
  var todos = ['a', 'b', 'c'];

  function TodoModel() {
    this._todos = todos;
    this.todoAdded = new Observable(this);
  }

  TodoModel.prototype.addTodo = function(todo) {
    this._todos.push(todo);
    this.todoAdded.notify(todo);
  };

  TodoModel.prototype.getTodos = function() {
    return this._todos;
  };

  // Interface
  return TodoModel;
})(Observable);