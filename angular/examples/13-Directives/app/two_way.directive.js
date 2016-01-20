function isolatedTwoWay() {
  return {
    restrict: 'E',
    scope: {
      dirName: '=name'
    },
    template: '<p>Name: <input ng-model="dirName" /></p>'
  };
}

export default isolatedTwoWay;
export const name = 'nsIsolatedTwoWay';
