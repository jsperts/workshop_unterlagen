class AppComponent {
  constructor() {
    this.isVisible = true;
    this.value = 5;
    this.obj = {
      value: 5
    };
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  changeValue(val) {
    this.value = val;
  }

  changeObjectRef() {
    this.obj = {
      value: 20,
    };
  }

  changeObjectValue() {
    this.obj.value = 10;
  }
}

const component = {
  template: `
    <button ng-click="$ctrl.toggleVisibility()">Toggle visibility</button>
    <button ng-click="$ctrl.changeValue(5)">5</button>
    <button ng-click="$ctrl.changeValue(10)">10</button>
    <button ng-click="$ctrl.changeObjectRef()">Change object ref</button>
    <button ng-click="$ctrl.changeObjectValue()">Change object value</button>
    <child-comp
      ng-if="$ctrl.isVisible"
      value="$ctrl.value"
      obj="$ctrl.obj"
    ></child-comp>
  `,
  controller: AppComponent
};

export default component;
export const name = 'appRoot';
