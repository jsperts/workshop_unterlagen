import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SendToServerService {
  constructor(private http: Http) {}

  send(data: string) {
    return this.http.post('/color', {data: data})
        .map(() => data); // status 200-299
  }
}
