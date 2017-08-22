import Observable from './observable.js';

// private
var todos = ['a', 'b', 'c'];

export default function TodoModel() {
  this._todos = todos;
  this.todoAdded = new Observable(this);
}

TodoModel.prototype.addTodo = function (todo) {
  this._todos.push(todo);
  this.todoAdded.notify(todo);
};

TodoModel.prototype.getTodos = function () {
  return this._todos;
};
