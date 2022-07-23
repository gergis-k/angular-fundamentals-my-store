import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Item from 'src/app/models/item';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Item[] = [];
  fullName: string = ''
  address: string = ''
  creditCard: string = ''
  totalPrice: number = 0

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calcPrice();
  }

  clearCart(): void {
    this.cartService.resetCart();
    this.items = [];
  }

  calcPrice(): void {
    this.totalPrice = this.cartService.calcTotal();
  }

  updateQuantity(): void {
    this.calcPrice();
  }

  removeFromCart(item: Item): void {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
    this.calcPrice();
  }

  submit(): void {
    this.cartService.setFullName(this.fullName);
    this.calcPrice();
    this.router.navigate(['confirmation'])
  }
}
