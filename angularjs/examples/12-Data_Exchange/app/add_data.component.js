import {ADD} from './app.constants';

class AddData {
  constructor($scope) {
    this.$scope = $scope;
  }

  add() {
    this.$scope.$emit(ADD, 'New Data');
  }
}
AddData.$inject = ['$scope'];

const component = {
  template: `
    <h3>Add Data</h3>
    <div ng-click="$ctrl.add()">Click me to add Data</div>
  `,
  controller: AddData
};

export default component;
export const name = 'addData';
