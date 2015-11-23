import TodoController from './controller';
import TodoModel from './model';
import TodosView from './view';

// private
var model = new TodoModel();
var elements = {
  addButton: document.getElementById('addButton'),
  inputField: document.getElementById('inputField'),
  list: document.getElementById('todosList')
};
var view = new TodosView(model, elements);
var controller = new TodoController(model, view);
view.renderTodos();
