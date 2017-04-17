class Main {
  constructor() {
    this.name = 'Max';
  }

  changeName() {
    this.name = 'Hans';
  }
}

const component = {
  template: `
    <p>One-Time Binding: {{::main.name}}</p>
    <p>One-Way Binding: {{main.name}}</p>
    <input ng-model="main.name"/>
    <button ng-click="main.changeName()">Change Name</button>
    <p>Expression: {{1 + 1}}</p>
  `,
  controller: Main,
  controllerAs: 'main'
};

export default component;
// Name: camelCase hier, kebab-case im HTML!
// Präfix für Komponentenamen nutzen: hier 'my'
export const name = 'myApp';
