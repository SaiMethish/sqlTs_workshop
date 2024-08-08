"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(title, price, description, category, product_id) {
        this.title = title;
        this.price = price;
        this.category = category;
        this.description = description;
        if (product_id != null)
            this.product_id = product_id;
    }
    toString() {
        return `name of the product:${this.title} id of the product ${this.product_id} 
        price of the product: ${this.price} category: ${this.category} description: ${this.description}`;
    }
}
exports.Product = Product;
