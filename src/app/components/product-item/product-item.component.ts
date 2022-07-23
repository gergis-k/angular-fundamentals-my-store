import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Item from 'src/app/models/item';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product = new Product();
  @Output() added = new EventEmitter()

  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantity: number;

  constructor(private router: Router) { this.quantity = 1; }

  ngOnInit(): void {
  }

  addItem(product: Product) {
    this.added.emit(new Item(product, this.quantity));
  }

}
