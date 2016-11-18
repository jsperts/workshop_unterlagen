import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AuthorsListComponent } from './authors_list.component';
import { SearchComponent } from './search.component';
import { AddAuthorComponent } from './add_author.component';
import { EditAuthorComponent } from './edit_author.component';
import { AuthorsFormComponent } from './authors_form.component';

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
    AuthorsFormComponent,
  ],
  imports: [ BrowserModule, FormsModule, HttpModule, routing ],
  providers: [
    AuthorsService,
    SearchService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
