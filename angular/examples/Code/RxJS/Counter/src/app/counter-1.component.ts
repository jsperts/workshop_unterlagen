import { Component, OnDestroy } from '@angular/core';

import { Counter1Service } from './counter-1.service';

@Component({
  selector: 'counter-1',
  template: `
    <h1>Counter 1</h1>
    <div>Counter: {{value}}</div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" (click)="start()">Start</button>
      <button type="button" class="btn btn-danger" (click)="stop()">Stop</button>
    </div>
  `,
})
export class Counter1Component implements OnDestroy {
  value = 0;
  private isRunning = false;
  private stopCounter: () => void;
  constructor(private counter: Counter1Service) {}

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.stopCounter = this.counter.start(this.value, (value: number) => {
        this.value = value;
      });
    }
  }

  stop() {
    if (this.stopCounter) {
      this.isRunning = false;
      this.stopCounter();
    }
  }

  ngOnDestroy() {
    this.stop();
  }
}
