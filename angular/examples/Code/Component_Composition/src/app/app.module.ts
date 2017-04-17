import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ItemComponent } from './item.component';
import { ItemInputComponent } from './item_input.component';
import { ListComponent } from './list.component';
import { DataService } from './data.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ItemComponent, ItemInputComponent, ListComponent ],
  bootstrap: [ AppComponent ],
  providers: [ DataService ]
})
export class AppModule { }
