import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './products.routes';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [ CommonModule, routing ],
  declarations: [ ProductsComponent, ProductComponent ],
  providers: [ ProductsService ]
})
export class ProductsModule { }
