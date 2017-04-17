import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';

import { AuthService } from './auth.service';
import { CanLoadGuardService } from './can_load_guard.service';

import { routing } from './app.routes';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, AboutComponent, HomeComponent, LoginComponent ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      CanLoadGuardService,
      AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
