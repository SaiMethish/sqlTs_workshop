"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(product_id, title, price, category, description) {
        this.product_id = product_id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.description = description;
    }
}
exports.Product = Product;
