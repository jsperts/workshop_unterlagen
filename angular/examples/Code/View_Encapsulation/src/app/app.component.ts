import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <view-none class="col-xs-4"></view-none>
    <view-emulated class="col-xs-4"></view-emulated>
    <view-native class="col-xs-4"></view-native>
  `
})
export class AppComponent {}
