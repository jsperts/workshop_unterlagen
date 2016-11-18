import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CdDefaultComponent }  from './cd_default.component';
import { CdOnPushComponent }  from './cd_onpush.component';
import { CdOnPushObservableComponent }  from './cd_onpush_observable.component';
import { ChildComponent } from './child.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    CdDefaultComponent,
    CdOnPushComponent,
    CdOnPushObservableComponent,
    ChildComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
