import { Product } from "./product";

export class Item {
    id: number;
    product: Product;
    quantity: number;

    constructor(id: number, product: Product, quantity: number) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
    }
}