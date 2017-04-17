const getId = (function() {
  let counter = 0;
  return function() {
    counter = counter + 1;
    return counter;
  }
})();

const todos = [
  {
    _id: getId(),
    title: 'todo 1',
    done: false
  },
  {
    _id: getId(),
    title: 'todo 2',
    done: true
  }
];

class TodoApp {
  constructor() {
    this.todos = todos;
  }

  addTodo(todo) {
    todo._id = getId();
    this.todos.push(todo);
  }
}

const component = {
  template: `
    <todo-input add-todo="$ctrl.addTodo(todo)"></todo-input>
    <todo-list todos="$ctrl.todos"></todo-list>
  `,
  controller: TodoApp
};

export default component;
export const name = 'todoApp';
