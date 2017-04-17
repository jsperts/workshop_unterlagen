class Comp2 {
  constructor($location, $routeParams) {
    this.compName = 'Component2';
    this.location = $location.path();
    this.id = $routeParams.id;
    this.paramType = typeof this.id;
  }
}
Comp2.$inject = ['$location', '$routeParams'];

const component = {
  template: `
    <p>Name: {{$ctrl.compName}}</p>
    <p>Location: {{$ctrl.location}}</p>
    <p>Route param: {{$ctrl.id}}</p>
    <p>Route param type: {{$ctrl.paramType}}</p>
  `,
  controller: Comp2
};

export default component;
export const name = 'comp2';