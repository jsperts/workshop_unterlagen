import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'view-none',
  styles: ['.box {border: 4px solid red; height: 100px; width: 100px;}'],
  template: `
    <h1>None</h1>
    <div class="box box-with-background"></div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class NoneComponent {}
