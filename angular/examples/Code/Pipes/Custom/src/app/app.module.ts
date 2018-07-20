import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ImpureFilterPipe } from './impure-filter.pipe';
import { PureFilterPipe } from './pure-filter.pipe';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ImpureFilterPipe, PureFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
