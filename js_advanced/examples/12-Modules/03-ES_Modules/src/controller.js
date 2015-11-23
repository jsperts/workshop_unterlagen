export default function TodoController(model, view) {
    view.addButtonClicked.observe(function(todo) {
      model.addTodo(todo);
    });
  }