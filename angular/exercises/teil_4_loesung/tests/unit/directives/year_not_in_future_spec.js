(function(angular, moduleName) {
  'use strict';

  describe('yearNotInFuture directive', function() {
    var elem, $scope;

    var html = '<form name="testForm"><input name="testInput" type="number" year-not-in-future ng-model="obj.year"/></form>';

    beforeEach(function() {
      angular.mock.module(moduleName);
      angular.mock.inject(function($compile, _$rootScope_) {
        $scope = _$rootScope_.$new();
        $scope.obj = {};

        elem = $compile(html)($scope);
        $scope.$digest();
      });
    });

    it('should set the yearInFuture error if the given year is in the future', function() {
      $scope.obj.year = 12222;
      $scope.$digest();

      var expectedErrorObj = {
        yearInFuture: true
      };

      expect($scope.testForm.testInput.$error).toEqual(expectedErrorObj);
    });

    it('should set the error object to empty if the given year is not in the future', function() {
      $scope.obj.year = 122;
      $scope.$digest();

      expect($scope.testForm.testInput.$error).toEqual({});
    });
  });
})(angular, window.MY_APP_MODULE_NAME);
