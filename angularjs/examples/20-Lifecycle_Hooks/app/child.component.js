class ChildComponent {
  constructor() {
    console.log('Constructor');
  }

  $onChanges(changeObj) {
    console.log('Changes', changeObj);
  }

  $onInit() {
    console.log('Init');
  }

  $doCheck() {
    console.log('Check');
  }

  $postLink() {
    console.log('Post link');
  }

  $onDestroy() {
    console.log('Destroy');
  }
}

const component = {
  template: `
    <p>Value: {{$ctrl.value}}</p>
    <p>Obj: {{$ctrl.obj.value}}</p>
  `,
  bindings: {
    value: '<',
    obj: '<'
  },
  controller: ChildComponent,
};

export default component;
export const name = 'childComp';
