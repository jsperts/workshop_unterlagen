import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';

@Injectable()
export class Counter3Service {
  start(initialValue: number) {
    return Observable
        .interval(200)
        .scan((counter) => counter + 1, initialValue);
  }
}
