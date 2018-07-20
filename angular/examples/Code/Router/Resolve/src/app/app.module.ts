import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, AboutComponent, HomeComponent, ProductsComponent ],
  providers: [
      ProductsService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
