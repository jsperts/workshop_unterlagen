import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {ProductsService} from './products.service';

@Component({
  template: `
    <h1>{{product.name}}</h1>
  `
})
export class ProductComponent implements OnInit, OnDestroy {
  product = {};
  subscription: Subscription;

  constructor(
      private productsService: ProductsService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('init');
    this.subscription = this.route.params.subscribe((params) => {
      this.product = this.productsService.getProduct(Number(params['id']));
    });
  }

  ngOnDestroy() {
    console.log('destroy');
    this.subscription.unsubscribe();
  }
}
