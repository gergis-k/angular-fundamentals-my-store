export default class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    isAvailable: boolean;
    category: string;
    createdAt: Date;

    // custom properties
    quantity: number;

    constructor(id: number) {
        this.id = id;
        this.name = 'N/A';
        this.price = 0;
        this.description = 'N/A';
        this.imageUrl = 'N/A';
        this.isAvailable = true;
        this.category = 'N/A';
        this.createdAt = new Date();
        this.quantity = 1;
    }
}