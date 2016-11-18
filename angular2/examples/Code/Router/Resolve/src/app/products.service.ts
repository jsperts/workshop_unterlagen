import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
];

@Injectable()
export class ProductsService implements Resolve<Array<any>> {
  resolve() {
    console.log('resolve');

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000)  ;
    });
  }
}
