class Main {
  constructor($scope) {
    $scope.$watch('$ctrl.middleName', () => {
      console.log('Middle name change in component');
    });

    this.obj = [{name: 'blabla'}];
  }

  changeObjProperty() {
    this.obj[0].name = 'blup';
  }

  changeObjRef() {
    this.obj.push({name: 'blip'});
  }

  callMe(calledWith) {
    this.called = calledWith;
  }
}
const component = {
  template: `
    <div style="width: 50%; float: left;">
      <h3>On Click</h3>
      <div ns-on-click="red">Ich kann rot werden!</div>
      <div ns-on-click="green">Ich kann grün werden!</div>

      <h3>Interpolation</h3>
      <p>Component</p>
      <p>Name: <input ng-model="$ctrl.firstName"/></p>
      <p>Direktive</p>
      <ns-interpolation name="Hallo: {{$ctrl.firstName}}"></ns-interpolation>

      <h3>Isolated two way</h3>
      <p>Component</p>
      <p>Last name:<input ng-model="$ctrl.lastName"/></p>
      <p>Directive</p>
      <ns-isolated-two-way name="$ctrl.lastName"></ns-isolated-two-way>
    </div>

    <div style="width: 50%; float: left;">
      <h3>Isolated two way star</h3>
      <p>Component</p>
      <button ng-click="$ctrl.changeObjProperty()">Change internal</button>
      <button ng-click="$ctrl.changeObjRef()">Change reference</button>
      <p>Names: {{$ctrl.obj}}</p>
      <p>Directive</p>
      <ns-isolated-two-way-star obj="$ctrl.obj"></ns-isolated-two-way-star>

      <h3>Isolated one way</h3>
      <p>Component</p>
      <p>Middle name<input ng-model="$ctrl.middleName"/></p>
      <p>Directive</p>
      <ns-isolated-one-way name="$ctrl.middleName"></ns-isolated-one-way>

      <h3>Isolated expression</h3>
      <p>Component called with: {{$ctrl.called}}</p>
      <p>Directive</p>
      <ns-expression expr="$ctrl.firstName + ' ' + $ctrl.lastName" fn="$ctrl.callMe(name)"></ns-expression>
    </div>
  `,
  controller: Main
};

export default component;
export const name = 'myApp';
