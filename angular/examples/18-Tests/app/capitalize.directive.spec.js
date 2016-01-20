describe('capitalize Directive', () => {
  let $compile, $scope, element;

  beforeEach(() => {
    let $rootScope;
    angular.mock.module('app');
    angular.mock.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });

    $scope = $rootScope.$new();
    $scope.color = 'red';
    $scope.$ctrl = {};
    const html = '<input ng-model="color" ns-capitalize/>';
    element = $compile(html)($scope);
    $scope.$digest();
  });

  it('should make capitals in the view value small in the model value', () => {
    element.controller('ngModel').$setViewValue('BlacK');
    expect($scope.color).toBe('black');
  });

  it('should force the view value to be capital', () => {
    element.controller('ngModel').$setViewValue('BlacK');
    expect(element.val()).toBe('BLACK');
  });

  it('should make smalls in the model value to capitals in the view value', () => {
    $scope.color = 'black';
    $scope.$digest();
    expect(element.val()).toBe('BLACK');
  });
});
