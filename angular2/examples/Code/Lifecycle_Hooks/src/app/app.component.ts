import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <div class="btn-group">
        <button class="btn btn-primary" type="button" (click)="toggleComponent()">
          Toggle Component Visibility
        </button>
        <button class="btn btn-primary" type="button" (click)="change(5)">5</button>
        <button class="btn btn-primary" type="button" (click)="change(10)">10</button>
      </div>
      <div class="col-xs-6">
        <h2>Hooks</h2>
        <my-child *ngIf="showComponent" [value]="num"></my-child>
      </div>
    </div>
  `,
})
export class AppComponent {
  num = 10;
  showComponent = true;

  change(num: number) {
    this.num = num;
  }

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
}
