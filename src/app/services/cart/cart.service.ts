import { Injectable } from '@angular/core';
import Item from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Item[] = [];

  constructor() { }

  getItems(): Item[] {
    return this.items;
  }

  addItem(item: Item): Item[] {
    let i = this.items.findIndex(p => p.product.name === item.product.name);
    if (i === -1) {
      this.items.push(item);
    }
    else {
      this.items.splice(i, 1);
      this.items.push(item);
    }
    return this.items;
  }

  removeItem(item: Item): Item[] {
    let i = this.items.findIndex(p => p.product.name === item.product.name);
    if (i !== -1) {
      this.items.splice(i, 1);
    }
    return this.items;
  }

  calcTotal(): number {
    let total = 0;
    this.items.forEach(item => {
      total += item.product.price * item.quantity;
    });
    return total;
  }

  resetCart(): Item[] {
    this.items = [];
    return this.items;
  }
}
