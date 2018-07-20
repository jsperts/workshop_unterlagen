import { Injectable } from '@angular/core';

import { interval } from 'rxjs';
import { scan } from 'rxjs/operators';

@Injectable()
export class Counter3Service {
  start(initialValue: number) {
    return interval(200)
        .pipe(
            scan((counter) => counter + 1, initialValue)
        );
  }
}
