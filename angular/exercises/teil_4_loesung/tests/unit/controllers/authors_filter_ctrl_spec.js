(function(angular, moduleName) {
  'use strict';

  describe('authors filter ctrl', function() {
    var ctrl, $rootScope, FilterService;

    var dummyData = ['a', 'b'];
    var promise = {
      then: function(fn) {
        fn(dummyData);
      }
    };

    beforeEach(function() {
      angular.mock.module(moduleName);
      angular.mock.inject(function($controller, _FilterService_, _$rootScope_, _DataService_) {
        $rootScope = _$rootScope_;
        FilterService = _FilterService_;

        spyOn($rootScope, '$broadcast');
        spyOn(_FilterService_, 'getFilteredList').and.returnValue(['a']);
        spyOn(_DataService_, 'getData').and.returnValue(promise);

        ctrl = $controller('AuthorsFilterCtrl', {
          DataService: _DataService_,
          FilterService: _FilterService_,
          $rootScope: _$rootScope_
        });
      });
    });

    it('should call the FilterService with the given data and search term', function() {
      ctrl.searchTerm = 'testSearch';
      ctrl.filter();

      expect(FilterService.getFilteredList).toHaveBeenCalledWith(dummyData, 'testSearch');
    });

    it('should $broadcast the data', function() {
      ctrl.searchTerm = 'testSearch';
      ctrl.filter();

      expect($rootScope.$broadcast).toHaveBeenCalledWith('filterFinished', ['a']);
    });
  });

})(angular, window.MY_APP_MODULE_NAME);
