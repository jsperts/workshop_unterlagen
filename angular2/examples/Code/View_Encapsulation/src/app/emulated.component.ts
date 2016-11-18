import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'view-emulated',
  styles: ['.box {border: 4px solid blue; height: 100px; width: 100px;}'],
  template: `
    <h1>Emulated</h1>
    <div class="box box-with-background"></div>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedComponent {}
