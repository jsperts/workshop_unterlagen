import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Counter1Component } from './counter-1.component';
import { Counter2Component } from './counter-2.component';
import { Counter3Component } from './counter-3.component';
import { Counter4Component } from './counter-4.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
      AppComponent,
      Counter1Component,
      Counter2Component,
      Counter3Component,
      Counter4Component
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
