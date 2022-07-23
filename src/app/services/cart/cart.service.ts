import { Injectable } from '@angular/core';
import Product from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = [];
  Total: number = 0;
  reciptTotal: number = 0;

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getReciptTotal(): number {
    return this.reciptTotal;
  }

  addProduct(product: Product): void {
    this.products.push(product);
    this.calcTotal();
  }

  removeProduct(product: Product): void {
    this.products = this.products.filter(p => p.id !== product.id);
    if (this.products.length === 0)
      this.Total = 0;
    alert(`${product.name} removed.`);
  }

  calcTotal(): number {
    if (this.products.length === 0)
      return this.Total;
    this.products.forEach(p => {
      this.Total = p.quantity * p.price;
    }
    );
    this.reciptTotal += this.Total;
    return this.reciptTotal;
  }
}
