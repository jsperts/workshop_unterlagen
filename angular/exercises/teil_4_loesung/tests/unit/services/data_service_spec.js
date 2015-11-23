(function(angular, moduleName) {
  'use strict';

  describe('DataService', function() {
    var DataService, baseUrl, $httpBackend, CacheService;

    var CacheServiceMock = function() {
      return {
        update: function() {
          console.log('update');
        }
      };
    };

    beforeEach(function() {
      angular.mock.module(moduleName);
      // Replace the CacheService in moduleName with the mock CacheService
      angular.mock.module(function($provide) {
        $provide.factory('CacheService', CacheServiceMock);
      });
      angular.mock.inject(function(_$httpBackend_, _DataService_, _BaseUrl_, _CacheService_) {
        baseUrl = _BaseUrl_;
        DataService = _DataService_;
        $httpBackend = _$httpBackend_;
        CacheService = _CacheService_;

        // and.callThrough() only used to show that the CacheServiceMock function was called
        // (console.log('update') should be visible in console)
        spyOn(CacheService, 'update').and.callThrough();
      });
    });

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('updateOrAdd Function', function() {
      describe('add', function() {
        var data;

        beforeEach(function() {
          data = {
            name: 'TestName',
            birthYear: 1999,
            books: []
          };
        });

        it('should send a POST request to baseUrl with given data', function() {
          $httpBackend.expectPOST(baseUrl, JSON.stringify(data)).respond(200);
          DataService.updateOrAdd(data);
          $httpBackend.flush();
        });

        it('should call the CacheService with the add operation and the data including id', function() {
          var id = 2;
          var expectedData = {
            name: 'TestName',
            birthYear: 1999,
            books: [],
            _id: id
          };
          // Response code (200) is needed because id is a number.
          // If it were an object we would not need the response code
          $httpBackend.whenPOST(baseUrl).respond(200, id);
          DataService.updateOrAdd(data);

          $httpBackend.flush();
          expect(CacheService.update).toHaveBeenCalledWith(expectedData, 'add');
        });
      });
    });
  });
})(angular, window.MY_APP_MODULE_NAME);
