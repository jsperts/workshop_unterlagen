import {DATA_ADDED} from './app.constants';

class ReactOnAdd {
  constructor($scope) {
    this.data = 'No data yet';
    $scope.$on(DATA_ADDED, ($event, data) => {
      this.data = data;
    });
  }
}
ReactOnAdd.$inject = ['$scope'];

const component = {
  template: `
    <h3>React on Data</h3>
    <div>Data: {{$ctrl.data}}</div>
  `,
  controller: ReactOnAdd
};

export default component;
export const name = 'reactOnAdd';
