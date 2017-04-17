class TodoInput {
  constructor() {
    this.todoTitle = '';
  }

  $onInit() {
    // Initialisierung die Bindings braucht
    console.log('Init');
  }

  add() {
    const todo = {
      title: this.todoTitle,
      done: false
    };
    // Wichtig: wir müssen ein Objekt mit Key "todo" beim Aufruf nutzen
    this.addTodo({todo: todo});
    this.todoTitle = '';
  }
}

const component = {
  template: `
    <input type="text" ng-model="$ctrl.todoTitle"/>
    <button ng-click="$ctrl.add()">Add</button>
  `,
  controller: TodoInput,
  bindings: {
    addTodo: '&'
  }
};

export default component;
export const name = 'todoInput';
