import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [
    '.box { background-color: orange; height: 100px; margin-top: 10px; }'
  ],
  template: `
    <div class="btn-group btn-group-lg">
      <button class="btn btn-primary" type="button" (click)="change(4)">4</button>
      <button class="btn btn-primary" type="button" (click)="change(8)">8</button>
      <button class="btn btn-primary" type="button" (click)="change(12)">12</button>
    </div>
    <div class="row">
    <div *multiplier="numberOfBoxes" class="col-xs-3">
      <div class="box"></div>
    </div>
    </div>
  `
})
export class AppComponent {
  numberOfBoxes = 8;
  change(num: number) {
    this.numberOfBoxes = num;
  }
}
