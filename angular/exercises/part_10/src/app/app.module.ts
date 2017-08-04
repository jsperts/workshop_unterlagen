import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AuthorsListComponent } from './authors_list.component';
import { SearchComponent } from './search.component';
import { AddAuthorComponent } from './add_author.component';
import { EditAuthorComponent } from './edit_author.component';

import { AuthorsService } from './shared/';
import { SearchService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthorsListComponent,
    SearchComponent,
    AddAuthorComponent,
    EditAuthorComponent,
  ],
  imports: [ BrowserModule, FormsModule, HttpClientModule, routing ],
  providers: [
    AuthorsService,
    SearchService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
