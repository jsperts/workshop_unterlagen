import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';

import { catchError, map, scan, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>With catch: {{withCatch}}</h2>
      <h2>Without catch: {{withoutCatch}}</h2>
      <h2>With rethrow: {{withRethrow}}</h2>
      <h2>Nested with catch: {{nestedWithCatch}}</h2>
      <h2>Nested without catch: {{nestedWithoutCatch}}</h2>
      <button class="btn btn-primary" #adder>Add</button>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('adder') addButton: ElementRef;

  withCatch = 0;
  withoutCatch = 0;
  withRethrow = 0;
  nestedWithCatch = 0;
  nestedWithoutCatch = 0;

  constructor() {}

  ngAfterViewInit() {
    const click$ = fromEvent<MouseEvent>(this.addButton.nativeElement, 'click')
        .pipe(
            map(() => 1),
            scan((acc: number, current: number) => {
              return acc + current
            }, 0)
        );

    const withError$ = click$
        .pipe(
            map((num) => {
              if (num === 5) {
                throw new Error('Error');
              }
              return num;
            })
        );

    // With catch
    withError$
        .pipe(
            catchError((e) => of(0))
        )
        .subscribe({
          next: (v) => { this.withCatch = v; },
          error() { console.log('with catch: error') },
          complete() { console.log('with catch: complete')},
        });

    // Without catch
    withError$
        .subscribe({
          next: (v) => { this.withoutCatch = v; },
          error(e) { console.log('without catch: error', e) },
          complete() { console.log('without catch: complete')},
        });

    // With rethrow
    withError$
        .pipe(
            catchError((e) => _throw(NaN))
        )
        .subscribe({
          next: (v) => { this.withRethrow = v; },
          error(e) { console.log('with rethrow: error', e) },
          complete() { console.log('with rethrow: complete')},
        });

    function getNestedObservable(v: number) {
      return of(v)
          .pipe(
              map((num) => {
                if (num === 5) {
                  throw new Error('Error');
                }
                return num;
              })
          )
    }

    // Nested with catch
    click$
        .pipe(
            switchMap((v) => getNestedObservable(v).pipe(
                catchError((e) => of(v)))
            )
        )
        .subscribe({
          next: (v) => { this.nestedWithCatch = v; },
          error(e) { console.log('nested with catch: error', e) },
          complete() { console.log('nested with catch: complete')},
        });

    // Nested without catch
    click$
        .pipe(
            switchMap((v) => getNestedObservable(v))
        )
        .subscribe({
          next: (v) => { this.nestedWithoutCatch = v; },
          error(e) { console.log('nested without catch: error', e) },
          complete() { console.log('nested without catch: complete')},
        });
  }
}
