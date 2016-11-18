import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <h1>{{title}}</h1>
    <ul class="list-group">
      <li class="list-group-item"
        *ngFor="let product of products">{{product.name}}</li>
    </ul>
  `,
})
export class ProductsComponent implements OnInit {
  products: Array<{ id: number; name: string; }> = [];
  title = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.data.subscribe(() => {}) works also
    const {title, products} = this.route.snapshot.data;

    this.products = products;
    this.title = title;
  }
}
