import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ProductsModule } from './products';

import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';

import { routing } from './app.routes';

@NgModule({
  imports: [ BrowserModule, routing, ProductsModule ],
  declarations: [ AppComponent, AboutComponent, HomeComponent ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
