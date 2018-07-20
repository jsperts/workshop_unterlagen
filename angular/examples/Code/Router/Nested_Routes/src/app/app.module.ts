import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsModule } from './products';

import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, ProductsModule ],
  declarations: [ AppComponent, AboutComponent, HomeComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
