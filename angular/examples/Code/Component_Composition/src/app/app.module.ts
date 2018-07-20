import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ItemComponent } from './item.component';
import { ItemInputComponent } from './item-input.component';
import { ListComponent } from './list.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ItemComponent, ItemInputComponent, ListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
