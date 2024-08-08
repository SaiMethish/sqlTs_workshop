"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(title, price, category, description) {
        this.title = title;
        this.price = price;
        this.category = category;
        this.description = description;
    }
    toString() {
        return `name of the product:${this.title} id of the product ${this.product_id} 
        price of the product: ${this.price} category: ${this.category} description: ${this.description}`;
    }
}
exports.Product = Product;
