describe('color Directive', () => {
  let $compile, $scope, dir;

  beforeEach(() => {
    let $rootScope;
    angular.mock.module('app');
    angular.mock.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });

    $scope = $rootScope.$new();
    $scope.scopeColor = 'red';
    $scope.$ctrl = {};
    const html = '<div ns-color="{{scopeColor}}"></div>';
    dir = $compile(html)($scope);
    $scope.$digest();
  });

  it('should set class on click', () => {
    dir.triggerHandler('click');
    expect(dir.hasClass('red')).toBe(true);
  });

  it('should add the new color to the scope', () => {
    dir.triggerHandler('click');
    expect($scope.$ctrl.newColor).toBe('red');
  });
});
