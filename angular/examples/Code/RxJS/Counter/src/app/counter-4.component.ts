import {
    Component,
    ViewChildren,
    ElementRef,
    QueryList,
    AfterViewInit,
    OnDestroy
} from '@angular/core';
import { Subscription, fromEvent, merge } from 'rxjs';
import { switchMap, map, takeUntil } from 'rxjs/operators';

import { Counter3Service } from './counter-3.service';

@Component({
  selector: 'counter-4',
  template: `
    <h1>Counter 4</h1>
    <div>Counter: {{value}}</div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" #startBtn>Start</button>
      <button type="button" class="btn btn-danger" #stopBtn>Stop</button>
      <button type="button" class="btn btn-danger" #resetBtn>Reset</button>
    </div>
  `,
  providers: [Counter3Service],
})
export class Counter4Component implements AfterViewInit, OnDestroy {
  @ViewChildren('startBtn,stopBtn,resetBtn') buttons: QueryList<ElementRef>;
  value = 0;
  private subscription: Subscription;
  constructor(private counterService: Counter3Service) {}

  ngAfterViewInit() {
    const [startButton, stopButton, resetButton] = this.buttons.toArray();
    const start$ = fromEvent(startButton.nativeElement, 'click');
    const stop$ = fromEvent(stopButton.nativeElement, 'click');
    const reset$ = fromEvent(resetButton.nativeElement, 'click');

    const inner$ = () => this.counterService.start(this.value).pipe(takeUntil(stop$));

    this.subscription = merge(
            start$.pipe(switchMap(inner$)), // Was flatMapLatest
            reset$.pipe(map((_) => 0))
        )
        .subscribe((value) => {
          this.value = value;
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
