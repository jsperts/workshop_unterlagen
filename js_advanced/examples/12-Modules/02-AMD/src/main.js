(function (require) {
  'use strict';
  require.config({
    baseUrl: 'src/',
  });
  require(['controller', 'model', 'view'], function (TodoController, TodoModel, TodosView) {
    // private
    var model = new TodoModel();
    var elements = {
      addButton: document.getElementById('addButton'),
      inputField: document.getElementById('inputField'),
      list: document.getElementById('todosList'),
    };
    var view = new TodosView(model, elements);
    var controller = new TodoController(model, view);
    view.renderTodos();
  });
})(require);
