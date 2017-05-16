(function (document, TodoModel, TodosView, TodoController) {
  'use strict';

  // private
  (function bootstrap() {
    var model = new TodoModel();
    var elements = {
      addButton: document.getElementById('addButton'),
      inputField: document.getElementById('inputField'),
      list: document.getElementById('todosList'),
    };
    var view = new TodosView(model, elements);
    var controller = new TodoController(model, view);
    view.renderTodos();
  })();
})(document, TodoModel, TodosView, TodoController);
