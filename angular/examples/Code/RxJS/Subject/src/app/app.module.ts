import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { List1Component } from './list1.component';
import { List2Component } from './list2.component';
import { AdderComponent } from './adder.component';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, List1Component, List2Component, AdderComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
