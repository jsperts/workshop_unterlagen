import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button type="button" (click)="changeInput()">Change input</button>
    <my-parent [input]="input"></my-parent>
  `,
})
export class AppComponent {
  input = 0;

  changeInput() {
    this.input = Math.random();
  }
}
