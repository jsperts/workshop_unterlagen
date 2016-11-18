import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { EmulatedComponent } from './emulated.component';
import { NativeComponent } from './native.component';
import { NoneComponent } from './none.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, EmulatedComponent, NativeComponent, NoneComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
