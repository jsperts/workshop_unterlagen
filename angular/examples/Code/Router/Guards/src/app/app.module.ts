import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminModule } from './admin';

import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, AdminModule ],
  declarations: [ AppComponent, AboutComponent, HomeComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
