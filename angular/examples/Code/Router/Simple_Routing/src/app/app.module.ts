import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routes';
import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, AboutComponent, HomeComponent, ProductsComponent ],
  providers: [
      ProductsService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
