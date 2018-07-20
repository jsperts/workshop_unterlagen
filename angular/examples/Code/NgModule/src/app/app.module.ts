import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserListModule } from './user-list';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, UserListModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
