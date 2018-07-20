import { Injectable } from '@angular/core';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts() {
    return products;
  }
  getProduct(id: number) {
    return products.filter((product) => product.id === id)[0];
  }
}
