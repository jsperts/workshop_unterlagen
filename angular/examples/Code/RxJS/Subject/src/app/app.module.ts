import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routing } from './app.routes';
import { AppComponent }  from './app.component';
import { List1Component } from './list1.component';
import { List2Component } from './list2.component';
import { AdderComponent } from './adder.component';
import { ListService } from './list.service';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, List1Component, List2Component, AdderComponent ],
  providers: [
      ListService,
      { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
