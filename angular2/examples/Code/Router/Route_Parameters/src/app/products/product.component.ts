import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from './products.service';

@Component({
  template: `
    <h1>{{product.name}}</h1>
  `
})
export class ProductComponent implements OnInit {
  product = {};
  constructor(
      private productsService: ProductsService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.product = this.productsService.getProduct(
        Number(this.route.snapshot.params['id'])
    );
  }
}
