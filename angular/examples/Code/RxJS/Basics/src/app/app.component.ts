import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { fromPromise } from 'rxjs/observable/fromPromise';
import { fromEvent } from 'rxjs/observable/fromEvent';

import { tap, map, filter, reduce, scan, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  styles: [
      '.box {border: 2px black solid;}',
      '.box--inner {height: 200px}',
      '.box--outer {height: 300px}',
  ],
  template: `
    <div class="row">
      <h2>Inner box clicks (reduce): {{reduceValue}}</h2>
      <h2>Inner box clicks (scan): {{scanValue}}</h2>
      <div class="col-xs-12 box box--outer">
        <div class="col-xs-12" style="height: 50px;"></div>
        <div id="inner" class="col-xs-offset-4 col-xs-4 box box--inner">
          Inner box
        </div>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  scanValue = 0;
  reduceValue = 0;
  private stopReduceSubscription: Subscription;
  private stopScanSubscription: Subscription;
  constructor(private element: ElementRef) {}

  ngOnInit() {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });

    const clicks$ = fromEvent<MouseEvent>(this.element.nativeElement, 'click')
        .pipe(
            tap((v) => console.log('after clicks$ value:', v)),
            map((e: MouseEvent) => (<Element>e.target).id || 'someOtherID'),
            tap((v) => console.log('after map value:', v)),
            filter((id) => id === 'inner'),
            tap((v) => console.log('after filter value:', v)),
            map(() => 1),
            takeUntil(fromPromise(promise)),
            tap((v) => console.log('after takeUntil value:', v))
        );

    this.stopReduceSubscription = clicks$
        .pipe(
            reduce((acc: number, current: number) => acc + current, 0),
            tap((v) => console.log('after reduce value:', v))
        )
        .subscribe(
            (value: number) => { this.reduceValue = value; },
            () => { console.log('error reduce'); },
            () => { console.log('done reduce'); }
        );

    this.stopScanSubscription = clicks$
        .pipe(
            scan((acc: number, current: number) => acc + current, 0),
            tap((v) => console.log('after scan value:', v))
        )
        .subscribe(
            (value: number) => { this.scanValue = value; },
            () => { console.log('error scan'); },
            () => { console.log('done scan'); }
        );
  }

  ngOnDestroy() {
    this.stopReduceSubscription.unsubscribe();
    this.stopScanSubscription.unsubscribe();
  }
}
