import { Injectable } from '@angular/core';
import {
  Http,
  RequestOptions,
  URLSearchParams,
  Response
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  url = 'http://localhost:8081/data';
  constructor(private http: Http) {}

  getData() {
    return this.http
        .get(this.url)
        .map((response) => response.json())
        .catch((response) => this.handleResponseError(response));
  }

  sendData(name: string) {
    return this.http
        .post(this.url, { name })
        .map((response) => response.json())
        .catch((response) => this.handleResponseError(response));
  }

  deleteData(id: number) {
    return this.http
        .delete(`${this.url}/${id}`)
        .map(() => id)
        .catch((response) => this.handleResponseError(response));
  }

  getWithError() {
    return this.http
        .get('dummy_url')
        .map((response) => response.json())
        .catch((response) => this.handleResponseError(response));
  }

  getWithQuery() {
    const params = new URLSearchParams();
    params.set('offset', String(1));
    params.set('limit', '10');
    params.set('key&1', 'val3');
    const options = new RequestOptions({ search: params });

    return this.http.get(this.url, options);
  }

  handleResponseError(response: Response) {
    let errorString = '';
    if (response.status === 500) {
      errorString = `Internal Server Error`;
    } else {
      errorString = 'Some error occurred';
    }
    return Observable.throw(errorString);
  }
}
