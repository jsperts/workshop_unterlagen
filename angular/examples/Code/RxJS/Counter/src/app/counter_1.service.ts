import { Injectable } from '@angular/core';

@Injectable()
export class Counter1Service {
  start(initialValue: number, cb: (v: number) => void) {
    let counter = initialValue;
    const token = setInterval(() => {
      cb(counter++);
    }, 200);
    return () => {
      clearInterval(token);
    };
  }
}
