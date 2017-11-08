import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DataService {
  url = 'http://localhost:8081/data';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http
        .get(this.url)
        .pipe(
            catchError((errorResponse) => this.handleResponseError(errorResponse))
        );
  }

  sendData(name: string) {
    return this.http
        .post(this.url, { name })
        .pipe(
            catchError((errorResponse) => this.handleResponseError(errorResponse))
        );
  }

  deleteData(id: number) {
    return this.http
        .delete(`${this.url}/${id}`)
        .pipe(
            map(() => id),
            catchError((errorResponse) => this.handleResponseError(errorResponse))
        );
  }

  getWithError() {
    return this.http
        .get('dummy_url')
        .pipe(
            catchError((errorResponse) => this.handleResponseError(errorResponse))
        );
  }

  getWithQuery() {
    const params = new HttpParams()
        .set('offset', String(1))
        .set('limit', '3')
        .set('key&1', 'val3');

    return this.http.get(this.url, { params });
  }

  handleResponseError(response: HttpErrorResponse) {
    let errorString = '';

    if (response.status === 500) {
      errorString = 'Internal Server Error';
    } else {
      errorString = 'Some error occurred';
    }
    return _throw(errorString);
  }
}
