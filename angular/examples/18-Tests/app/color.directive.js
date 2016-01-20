function color() {
  return {
    restrict: 'A',
    link(scope, element, attrs) {
      element.on('click', () => {
        element.addClass(attrs.nsColor);
        scope.$apply(() => {
          scope.$ctrl.newColor = attrs.nsColor;
        });
      });
    }
  }
}

export default color;
export const name = 'nsColor';