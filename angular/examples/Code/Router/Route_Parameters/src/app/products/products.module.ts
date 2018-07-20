import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';

import { ProductsService } from './products.service';

@NgModule({
  imports: [ CommonModule, ProductsRoutingModule ],
  declarations: [ ProductsComponent, ProductComponent ],
  providers: [ ProductsService ]
})
export class ProductsModule { }
