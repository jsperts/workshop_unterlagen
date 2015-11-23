(function(angular, moduleName) {
  'use strict';

  describe('authors list directive', function() {
    var $scope, elem;

    var html = '<authors-list data="testData"></authors-list>';

    var promise = {
      then: function(fn) {
        fn();
      }
    };
    var locationMock;
    beforeEach(function() {
      angular.mock.module(moduleName);
      angular.mock.module('templates/authors_list.html');
      angular.mock.inject(function($controller, _$compile_, _$rootScope_, _DataService_) {
        $scope = _$rootScope_.$new();

       locationMock = {
          path: function() {}
        };

        // Avoid the GET request on controller load
        spyOn(_DataService_, 'getData').and.returnValue(promise);

        $controller('AuthorsListCtrl', {
          $scope: _$rootScope_,
          $location: locationMock,
          DataService: _DataService_
        });

        elem = _$compile_(html)($scope);
        $scope.$digest();
        spyOn(elem.controller('authorsList'), 'navigate');
      });
    });

    it('should call the navigate function of the controller with the data on click', function() {
      elem.triggerHandler('click');
      $scope.$digest();

      expect(elem.controller('authorsList').navigate).toHaveBeenCalledWith('testData');
    });
  });
})(angular, window.MY_APP_MODULE_NAME);
