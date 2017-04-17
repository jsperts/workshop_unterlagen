describe('containsAbcAsync Directive', () => {
  let $compile, $scope, element, $httpBackend;

  beforeEach(() => {
    let $rootScope;
    angular.mock.module('app');
    angular.mock.inject((_$compile_, _$rootScope_, _$httpBackend_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $httpBackend = _$httpBackend_;
    });

    $scope = $rootScope.$new();
    $scope.color = 'initial';
    var html = '<input ng-model="color" ns-contains-abc-async/>';
    element = $compile(html)($scope);
    // Expect the initial directive setup call
    $httpBackend.whenGET('/containsABCinitial').respond(200);
    $scope.$digest();
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should mark the input as invalid if the given color does not contain abc', () => {
    $httpBackend.whenGET('/containsABCblack').respond(500);
    element.controller('ngModel').$setViewValue('black');
    $httpBackend.flush();
    expect(element.controller('ngModel').$invalid).toBe(true);
    expect($scope.color).toBeUndefined();
  });

  it('should mark the input as valid if the given color contains abc', () => {
    $httpBackend.whenGET('/containsABCabccolor').respond(200);
    element.controller('ngModel').$setViewValue('abccolor');
    $httpBackend.flush();
    expect(element.controller('ngModel').$valid).toBe(true);
    expect($scope.color).toBe('abccolor');
  });
});
