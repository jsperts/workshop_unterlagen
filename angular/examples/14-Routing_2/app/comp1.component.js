class Comp1 {
  constructor($location, $route) {
    console.log($route);
    this.compName = 'Component1';
    this.location = $location.path();
  }
}
Comp1.$inject = ['$location', '$route'];

const component = {
  template: `
    <p>Name: {{$ctrl.compName}}</p>
    <p>Location: {{$ctrl.location}}</p>
    <p>Data: {{$ctrl.data}}</p>
  `,
  controller: Comp1,
  bindings: {
    data: '='
  }
};

export default component;
export const name = 'comp1';
