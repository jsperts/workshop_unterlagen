import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AuthorsService } from './shared/';

@NgModule({
  declarations: [ AppComponent, MainComponent ],
  imports: [ BrowserModule ],
  providers: [ AuthorsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
