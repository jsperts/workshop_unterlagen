import {ADD, DATA_ADDED} from './app.constants';

class Main {
  constructor($scope) {
    const cancelAddEvent = $scope.$on(ADD, ($event, data) => {
      $event.stopPropagation();
      $scope.$broadcast(DATA_ADDED, data);
    });
  }
}
Main.$inject = ['$scope'];

const component = {
  template: `
    <add-data></add-data>
    <react-on-add></react-on-add>
  `,
  controller: Main
};

export default component;
export const name = 'myApp';
