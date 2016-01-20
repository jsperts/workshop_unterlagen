function interpolation() {
  return {
    restrict: 'E',
    scope: {
      dirName: '@name'
    },
    template: '<p>{{dirName}}</p>'
  };
}

export default interpolation;
export const name = 'nsInterpolation';
