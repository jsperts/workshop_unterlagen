import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'view-native',
  styles: ['.box {border: 4px solid black; height: 100px; width: 100px;}'],
  template: `
    <h1>Native</h1>
    <div class="box box-with-background"></div>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class NativeComponent {}
