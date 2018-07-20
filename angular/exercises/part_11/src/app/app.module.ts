import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AuthorsListComponent } from './authors-list.component';
import { SearchComponent } from './search.component';
import { AddAuthorComponent } from './add-author.component';
import { EditAuthorComponent } from './edit-author.component';
import { AuthorsFormComponent } from './authors-form.component';

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
  imports: [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
