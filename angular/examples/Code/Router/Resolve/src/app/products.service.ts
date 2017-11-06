import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
];

@Injectable()
export class ProductsService implements Resolve<Array<any>> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('resolve');

    return new Promise<Array<any>>((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000)  ;
    });
  }
}
