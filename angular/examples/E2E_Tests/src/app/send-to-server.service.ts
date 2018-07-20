import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendToServerService {
  constructor(private http: HttpClient) {}

  send(data: string) {
    return this.http.post('http://localhost:4201/color', {data: data})
        .pipe(
            map(() => data) // status 200-299
        )
  }
}
