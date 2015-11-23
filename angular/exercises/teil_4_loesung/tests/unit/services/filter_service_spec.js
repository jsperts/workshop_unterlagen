(function(angular, moduleName) {
  'use strict';

  describe('FilterService', function() {
    var FilterService;

    var dummyAuthor1 = {
      name: 'Agatha'
    };
    var dummyAuthor2 = {
      name: 'Jane'
    };
    var dummyAuthor3 = {
      name: 'John'
    };
    var dummyData = [dummyAuthor1, dummyAuthor2, dummyAuthor3];

    beforeEach(function() {
      angular.mock.module(moduleName);
      angular.mock.inject(function(_FilterService_) {
        FilterService = _FilterService_;
      });
    });

    it('should return the given list when the searchTerm is empty', function() {
      var result = FilterService.getFilteredList(dummyData, '');

      expect(result).toBe(dummyData);
    });

    it('should return a list with only matching names when the searchTerm is not empty', function() {
      var result = FilterService.getFilteredList(dummyData, 'j');

      expect(result).toEqual([dummyAuthor2, dummyAuthor3]);
    });

    it('should return an empty list if no name matches', function() {
      var result = FilterService.getFilteredList(dummyData, 'b');

      expect(result).toEqual([]);
    });
  });
})(angular, window.MY_APP_MODULE_NAME);
