import { Component, OnInit } from '@angular/core';

import { ProductsService } from './products.service';

@Component({
  styles: ['.active { color: red !important; }'],
  template: `
    <div class="row">
      <h1>Products</h1>
      <div class="col-xs-6">
        <ul class="list-group">
          <li class="list-group-item"
            *ngFor="let product of products">
            <a [routerLink]="[product.id]" routerLinkActive="active">{{product.name}}</a>
          </li>
        </ul>
      </div>
      <div class="col-xs-6">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class ProductsComponent implements OnInit {
  products: Array<{ id: number; name: string; }> = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
