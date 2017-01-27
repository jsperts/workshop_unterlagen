import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AuthorsListComponent } from './authors_list.component';
import { SearchComponent } from './search.component';
import { AuthorsService } from './shared/';
import { SearchService } from './shared';

@NgModule({
  declarations: [ AppComponent, MainComponent, AuthorsListComponent, SearchComponent ],
  imports: [ BrowserModule, FormsModule, HttpModule ],
  providers: [ AuthorsService, SearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }