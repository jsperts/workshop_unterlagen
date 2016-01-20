class Comp2 {
  constructor($location) {
    this.compName = 'Component2';
    this.location = $location.path();
  }
}
Comp2.$inject = ['$location'];

const component = {
  template: `
    <p>Name: {{$ctrl.compName}}</p>
    <p>Location: {{$ctrl.location}}</p>
  `,
  controller: Comp2
};

export default component;
export const name = 'comp2';