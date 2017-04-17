import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  template: `
    <h1>Products</h1>
    <ul class="list-group">
      <li class="list-group-item"
        *ngFor="let product of products">{{product.name}}</li>
    </ul>
  `,
})
export class ProductsComponent implements OnInit {
  products: Array<{ id: number; name: string; }> = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
