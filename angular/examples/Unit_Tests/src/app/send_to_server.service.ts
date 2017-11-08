import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class SendToServerService {
  constructor(private http: HttpClient) {}

  send(data: string) {
    return this.http.post('/color', {data: data})
        .pipe(
            map(() => data) // status 200-299
        );
  }
}
