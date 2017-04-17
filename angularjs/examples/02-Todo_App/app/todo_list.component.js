const component = {
  template: `
    <ul>
      <li ng-repeat="todo in $ctrl.todos track by todo._id">
        <todo-item todo="todo"></todo-item>
      </li>
    </ul>
  `,
  bindings: {
    todos: '='
  }
};

export default component;
export const name = 'todoList';
