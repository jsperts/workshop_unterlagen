import * as IndexedDB from './helpers/indexeddb_connector';

class TodosService {
  constructor() {}

  getAll(success, error) {
    IndexedDB.getAll(success, error);
  }

  addTodo(todoTitle, success, error) {
    const todo = {
      title: todoTitle,
      checked: false
    };
    IndexedDB.add(todo, (id) => {todo._id = id; success(todo);}, error);
  }

  updateTodo(todo, success, error) {
    IndexedDB.update(todo, success, error);
  }

  deleteTodo(id, success, error) {
    IndexedDB.remove(id, success, error);
  }
}

export default TodosService;
