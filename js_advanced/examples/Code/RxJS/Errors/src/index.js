import { fromEvent } from 'rxjs/observable/fromEvent';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';

import { catchError, map, mapTo, scan, switchMap } from 'rxjs/operators';

const withCatch = document.getElementById('withCatch');
const withoutCatch = document.getElementById('withoutCatch');
const withRethrow = document.getElementById('withRethrow');
const nestedWithCatch = document.getElementById('nestedWithCatch');
const nestedWithoutCatch = document.getElementById('nestedWithoutCatch');
const adderBtn = document.getElementById('adder');

const click$ = fromEvent(adderBtn, 'click').pipe(
  mapTo(1),
  scan((acc, current) => acc + current, 0),
);

const withError$ = click$.pipe(
  map(num => {
    if (num === 5) {
      throw new Error('Error');
    }
    return num;
  }),
);

// With catch
withError$.pipe(catchError(() => of(0))).subscribe({
  next: v => {
    withCatch.textContent = v;
  },
  error() {
    console.log('with catch: error');
  },
  complete() {
    console.log('with catch: complete');
  },
});

// Without catch
withError$.subscribe({
  next: v => {
    withoutCatch.textContent = v;
  },
  error(e) {
    console.log('without catch: error', e);
  },
  complete() {
    console.log('without catch: complete');
  },
});

// With rethrow
withError$.pipe(catchError(() => _throw(NaN))).subscribe({
  next: v => {
    withRethrow.textContent = v;
  },
  error(e) {
    console.log('with rethrow: error', e);
  },
  complete() {
    console.log('with rethrow: complete');
  },
});

function getNestedObservable(v) {
  return of(v).pipe(
    map(num => {
      if (num === 5) {
        throw new Error('Error');
      }
      return num;
    }),
  );
}

// Nested with catch
click$
  .pipe(switchMap(v => getNestedObservable(v).pipe(catchError(() => of(v)))))
  .subscribe({
    next: v => {
      nestedWithCatch.textContent = v;
    },
    error(e) {
      console.log('nested with catch: error', e);
    },
    complete() {
      console.log('nested with catch: complete');
    },
  });

// Nested without catch
click$.pipe(switchMap(v => getNestedObservable(v))).subscribe({
  next: v => {
    nestedWithoutCatch.textContent = v;
  },
  error(e) {
    console.log('nested without catch: error', e);
  },
  complete() {
    console.log('nested without catch: complete');
  },
});
