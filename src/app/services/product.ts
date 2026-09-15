import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 25000 },
    { id: 2, name: 'Phone', price: 15000 },
    { id: 3, name: 'Headphones', price: 2500 },
    { id: 4, name: 'Keyboard', price: 1200 },
    { id: 5, name: 'Mouse', price: 700 }
  ];

  getProducts(): Product[] {
    return this.products;
  }

}