(function() {
  'use strict';

  describe('sendToServer Service', function() {
    var $httpBackend, service;

    beforeEach(function() {
      module('testApp');
      inject(function(_$httpBackend_, _SendToServer_) {
        $httpBackend = _$httpBackend_;
        service = _SendToServer_;
      });
    });

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should send data to /color', function() {
      var data = {data: 'red'};
      $httpBackend.expectPOST('/color', JSON.stringify(data)).respond(200);
      service.send('red');
      $httpBackend.flush();
    });

    it('should get a 200 status code', function() {
      $httpBackend.whenPOST('/color').respond(200);
      var promise = service.send('red');
      promise.then(function(response){
        expect(response.status).toBe(200);
      });
      $httpBackend.flush();
    });
  });
})();
