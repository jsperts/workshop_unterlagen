const component = {
  template: `
    {{$ctrl.todo.title}}, done: {{$ctrl.todo.done}}
  `,
  bindings: {
    todo: '='
  }
};

export default component;
export const name = 'todoItem';
