function MainCtrl() {
  this.called = 'Not Called';
  this.value = 2;
}

MainCtrl.prototype.callMe = function (val) {
  this.called = val;
};

function expression() {
  return {
    restrict: 'E',
    scope: {
      myExpr: '&expr',
      myFn: '&fn'
    },
    template: '<button type="button">Call Now!</button><p>myExpr: {{myExpr()}}</p>',
    link: function (scope, element) {
      element.find('button').on('click', function () {
        // Achtung Event-Handlers brauchen $apply, wenn diese was in der View ändern
        scope.$apply(function () {
          scope.myFn({name: 'Directive'});
        });
      });
    }
  };
}

export default expression;
export const name = 'nsExpression';
