(function(angular) {
  'use strict';

  describe('color Directive', function() {
    var $compile, $rootScope, dir;

    beforeEach(function() {
      module('testApp');
      module('templates/color.html');
      inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
      });

      var $scope = $rootScope.$new();
      $scope.scopeColor = 'red';
      var html = '<color box-color="{{scopeColor}}"></color>';
      dir = $compile(html)($scope);
      $scope.$apply();
    });

    it('should set class on click', function() {
      dir.triggerHandler('click');
      expect(dir.hasClass('red')).toBe(true);
    });

    it('should have the given color in the div', function() {
      expect(dir.text().trim()).toBe('red');
    });
  });
})(angular);
