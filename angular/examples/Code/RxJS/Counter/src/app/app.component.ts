import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <div class="col-xs-3">
        <counter-1></counter-1>
      </div>
      <div class="col-xs-3">
        <counter-2></counter-2>
      </div>
      <div class="col-xs-3">
        <counter-3></counter-3>
      </div>
      <div class="col-xs-3">
        <counter-4></counter-4>
      </div>
    </div>
  `,
})
export class AppComponent {}
