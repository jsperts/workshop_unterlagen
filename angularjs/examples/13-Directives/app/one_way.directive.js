function isolatedOneWay() {
  return {
    restrict: 'E',
    scope: {
      dirName: '<name'
    },
    template: '<p>Name: <input ng-model="dirName" /></p>'
  };
}

export default isolatedOneWay;
export const name = 'nsIsolatedOneWay';
