import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ServerData {
  id: number;
  name: string;
}

@Injectable()
export class DataService {
  url = 'http://localhost:8081/data';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http
        .get<Array<ServerData>>(this.url)
        .pipe(
            catchError((errorResponse) => this.handleResponseError(errorResponse))
        );
  }

  sendData(name: string) {
    return this.http
        .post<ServerData>(this.url, { name })
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

  // Explanation in https://angular.io/guide/http#error-handling does not match what the HttpClient code actually does
  handleResponseError(response: HttpErrorResponse) {
    let errorString = '';

    if (response instanceof HttpErrorResponse) {
      // JSON parse error
      if (response.error.error instanceof Error) {
        errorString = `JSON parse error. Body: ${response.error.text}`;
      // Connection error
      } else if (response.error instanceof ProgressEvent) { // xhr.onerror callback
        errorString = `Connection Error: Error ${response.error}`;
      // Status code >= 300
      } else {
        console.log('Body', response.error); // Server data, same as body of HttpResponse
        if (response.status === 500) {
          errorString = 'Internal Server Error';
        } else {
          errorString = 'Some error occurred';
        }
      }
    // Exception in RxJS Operator
    } else {
      errorString = 'Some exception occurred';
    }

    return throwError(errorString);
  }
}
