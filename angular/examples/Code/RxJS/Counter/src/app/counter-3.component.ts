import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Counter3Service } from './counter-3.service';

@Component({
  selector: 'counter-3',
  template: `
    <h1>Counter 3</h1>
    <div>Counter: {{value}}</div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" (click)="start()">Start</button>
      <button type="button" class="btn btn-danger" (click)="stop()">Stop</button>
    </div>
  `,
  providers: [Counter3Service]
})
export class Counter3Component implements OnDestroy {
  value = 0;
  private stopCounter: Subscription;
  private isRunning = false;
  constructor(private counterService: Counter3Service) {}

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.stopCounter = this.counterService
          .start(this.value)
          .subscribe((value) => {
            this.value = value;
          });
    }
  }

  stop() {
    if (this.stopCounter) {
      this.isRunning = false;
      this.stopCounter.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.stop();
  }
}
