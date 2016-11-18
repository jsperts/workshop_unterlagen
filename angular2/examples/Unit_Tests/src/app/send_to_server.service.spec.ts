import { async, TestBed } from '@angular/core/testing';

import { MockBackend, MockConnection } from '@angular/http/testing';

import {
    HttpModule, Http, XHRBackend, Response, ResponseOptions
} from '@angular/http';

import { SendToServerService } from './send_to_server.service';

describe('SendToServerService', () => {
  let uut: SendToServerService;
  let backend: MockBackend;
  let http: Http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });

    http = TestBed.get(Http);
    backend = TestBed.get(XHRBackend);
    uut = new SendToServerService(http);
  });

  it('should send data to /color', () => {
    const postSpy = spyOn(http, 'post').and.callThrough();

    uut.send('green');

    expect(postSpy).toHaveBeenCalledWith('/color', {data: 'green'});
  });

  it('should return the request color', async(() => {
    const options = new ResponseOptions({status: 200});
    const response = new Response(options);
    backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

    uut.send('green').subscribe((c) => {
      expect(c).toBe('green');
    });
  }));

  it('should return the error object if some error occurres', (done) => {
    backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('Some error occurred!')));

    uut.send('green').subscribe(() => {}, (error) => {
      expect(error.message).toBe('Some error occurred!');
      done();
    });
  });
});
