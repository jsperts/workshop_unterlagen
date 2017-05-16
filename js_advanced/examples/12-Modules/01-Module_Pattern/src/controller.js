var TodoController = (function () {
  'use strict';

  function TodoController(model, view) {
    view.addButtonClicked.observe(function (todo) {
      model.addTodo(todo);
    });
  }

  // Interface
  return TodoController;
})();
