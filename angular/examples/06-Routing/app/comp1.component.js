class Comp1 {
  constructor($location) {
    this.compName = 'Component1';
    this.location = $location.path();
  }
}
Comp1.$inject = ['$location'];

const component = {
  template: `
    <p>Name: {{$ctrl.compName}}</p>
    <p>Location: {{$ctrl.location}}</p>
  `,
  controller: Comp1
};

export default component;
export const name = 'comp1';
