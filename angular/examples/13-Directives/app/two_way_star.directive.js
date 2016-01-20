function isolatedTwoWayStar() {
  return {
    restrict: 'E',
    scope: {
      obj: '=*'
    },
    template: `
      <p>Names: {{obj}}</p>
      <button ng-click="changeObjProperty()">Change internal</button>
      <button ng-click="changeObjRef()">Change reference</button>
    `,
    controller($scope) {
      $scope.$watchCollection('obj', () => {
        console.log('Watch collection change in directive');
      });

      $scope.changeObjProperty = function() {
        $scope.obj[0].name = 'Directive blup';
      };

      $scope.changeObjRef = function() {
        $scope.obj.push({name: 'Direktive blip'});
      };
    }
  };
}

export default isolatedTwoWayStar;
export const name = 'nsIsolatedTwoWayStar';
