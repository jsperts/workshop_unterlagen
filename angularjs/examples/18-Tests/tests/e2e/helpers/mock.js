'use strict';

module.exports = function () {
  angular.module('appMock', ['app', 'ngMockE2E'])
      .run(function ($httpBackend) {
        $httpBackend.whenPOST('/color').respond(() => {
          return [200];
        });
        $httpBackend.whenGET(/.*/).passThrough();
      });
};
