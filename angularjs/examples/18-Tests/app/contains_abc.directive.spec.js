describe('containsAbc Directive', () => {
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
    var html = '<input ng-model="color" ns-contains-abc/>';
    element = $compile(html)($scope);
    $scope.$digest();
  });

  it('should mark the input as invalid if the given color does not contain abc', () => {
    element.controller('ngModel').$setViewValue('black');
    expect(element.controller('ngModel').$invalid).toBe(true);
    expect($scope.color).toBeUndefined();
  });

  it('should mark the input as valid if the given color contains abc', () => {
    element.controller('ngModel').$setViewValue('abccolor');
    expect(element.controller('ngModel').$valid).toBe(true);
    expect($scope.color).toBe('abccolor');
  });
});
