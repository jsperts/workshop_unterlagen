import {
    Component,
    ViewChildren,
    ElementRef,
    QueryList,
    AfterViewInit,
    OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';

import { Counter3Service } from './counter_3.service';

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
    const start$ = Observable.fromEvent(startButton.nativeElement, 'click');
    const stop$ = Observable.fromEvent(stopButton.nativeElement, 'click');
    const reset$ = Observable.fromEvent(resetButton.nativeElement, 'click');

    const inner$ = () => this.counterService.start(this.value).takeUntil(stop$);

    this.subscription = Observable.merge(
            start$.switchMap(inner$), // Was flatMapLatest
            reset$.map((_) => 0)
        )
        .subscribe((value) => {
          this.value = value;
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
