import { async, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { SendToServerService } from './send_to_server.service';

describe('SendToServerService', () => {
  let uut: SendToServerService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });

    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    uut = new SendToServerService(http);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send data to /color', () => {
    const postSpy = spyOn(http, 'post').and.callThrough();

    uut.send('green');

    expect(postSpy).toHaveBeenCalledWith('/color', {data: 'green'});
  });

  it('should return the request color', () => {
    // Send request
    uut.send('green').subscribe((c) => {
      expect(c).toBe('green');
    });

    const request = httpMock.expectOne('/color');

    // Send response
    request.flush({});
  });

  it('should return the error object if some error occurs', () => {
    // Send request
    uut.send('green').subscribe(() => {}, (error) => {
      expect(error.status).toBe(500);
    });

    const request = httpMock.expectOne('/color');

    // Send response
    request.flush({}, { status: 500, statusText: 'Internal Error' });
  });
});
