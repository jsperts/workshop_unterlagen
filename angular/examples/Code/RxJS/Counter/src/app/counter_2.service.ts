import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class Counter2Service {
  start(initialValue: number) {
    console.log('initialize');
    let counter = initialValue;
    return new Observable<number>((observer: Observer<number>) => {
      console.log('subscribe');
      const token = setInterval(() => {
        observer.next(counter++);
      }, 200);

      return () => {
        console.log('unsubscribe');
        clearInterval(token);
      };
    });
  }
}
