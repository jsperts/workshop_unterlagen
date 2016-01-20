describe('sendToServer Service', () => {
  let $httpBackend, service;

  const logger = {
    log: jasmine.createSpy()
  };
  function logFactory() {
    return logger;
  }

  beforeEach(() => {
    angular.mock.module('app', ($provide) => {
      $provide.factory('Log', logFactory);
    });
    angular.mock.inject((_$httpBackend_, _SendToServerService_) => {
      $httpBackend = _$httpBackend_;
      service = _SendToServerService_;
    });
  });

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should send data to /color', () => {
    const data = {
      data: 'red'
    };
    $httpBackend.expectPOST('/color', JSON.stringify(data)).respond(200);
    service.send('red');
    $httpBackend.flush();
  });

  it('should call the logger when sending data', () => {
    const data = {
      data: 'red'
    };
    $httpBackend.expectPOST('/color', JSON.stringify(data)).respond(200);
    service.send('red');
    $httpBackend.flush();
    expect(logger.log).toHaveBeenCalled();
  });

  it('should put the response data into the data property', () => {
    $httpBackend.whenPOST('/color').respond(200, 'data');
    service.send('red');
    $httpBackend.flush();
    expect(service.data).toBe('data');
  });

  it('should put the error response into the error property', () => {
    $httpBackend.whenPOST('/color').respond(500, 'data');
    service.send('red');
    $httpBackend.flush();
    expect(service.error).toBe('ERROR');
  });
});
