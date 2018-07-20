import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AuthorsListComponent } from './authors-list.component';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [ AppComponent, MainComponent, AuthorsListComponent, SearchComponent ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
