import { fromPromise } from 'rxjs/observable/fromPromise';
import { fromEvent } from 'rxjs/observable/fromEvent';

import { tap, map, filter, reduce, scan, takeUntil } from 'rxjs/operators';

const clickContainer = document.getElementById('clickContainer');
const innerScan = document.getElementById('innerScan');
const innerReduce = document.getElementById('innerReduce');

const promise = new Promise(resolve => {
  setTimeout(resolve, 5000);
});

const clicks$ = fromEvent(clickContainer, 'click').pipe(
  tap(v => console.log('after clicks$ value:', v)),
  map(e => e.target.id || 'someOtherID'),
  tap(v => console.log('after map value:', v)),
  filter(id => id === 'inner'),
  tap(v => console.log('after filter value:', v)),
  map(() => 1),
  takeUntil(fromPromise(promise)),
  tap(v => console.log('after takeUntil value:', v)),
);

// subscription
clicks$
  .pipe(
    reduce((acc, current) => acc + current, 0),
    tap(v => console.log('after reduce value:', v)),
  )
  .subscribe(
    value => {
      innerReduce.textContent = value;
    },
    () => {
      console.log('error reduce');
    },
    () => {
      console.log('done reduce');
    },
  );

// subscription
clicks$
  .pipe(
    scan((acc, current) => acc + current, 0),
    tap(v => console.log('after scan value:', v)),
  )
  .subscribe(
    value => {
      innerScan.textContent = value;
    },
    () => {
      console.log('error scan');
    },
    () => {
      console.log('done scan');
    },
  );
