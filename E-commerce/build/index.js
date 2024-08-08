"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_list = exports.prompt = void 0;
const Product_1 = require("./model/Product");
const productService_1 = require("./service/productService");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
exports.prompt = (0, prompt_sync_1.default)();
exports.product_list = [];
const products = [
    {
        name: "Asus TUF",
        price: 599,
        description: "15.6-inch Full HD display, Intel i5, 8GB RAM, 256GB SSD.",
        category: "laptops",
        product_id: 1
    },
    {
        name: "HP Envy",
        price: 799,
        description: "14-inch Full HD display, Intel i7, 16GB RAM, 512GB SSD.",
        category: "laptops",
        product_id: 2
    },
    {
        name: "iPhone 12",
        price: 999,
        description: "6.1-inch OLED display, A14 Bionic chip, 128GB storage.",
        category: "mobile phones",
        product_id: 3
    },
    {
        name: "Galaxy S21",
        price: 699,
        description: "6.5-inch AMOLED display, Snapdragon 888, 256GB storage.",
        category: "mobile phones",
        product_id: 4
    },
    {
        name: "RTX 3060",
        price: 499,
        description: "NVIDIA GeForce RTX 3060, 12GB GDDR6.",
        category: "graphics cards",
        product_id: 5
    },
    {
        name: "RX 6700",
        price: 699,
        description: "AMD Radeon RX 6700 XT, 12GB GDDR6.",
        category: "graphics cards",
        product_id: 6
    },
    {
        name: "Sony WH1000",
        price: 348,
        description: "Industry-leading noise canceling with Dual Noise Sensor technology.",
        category: "headphones",
        product_id: 7
    },
    {
        name: "Bose 700",
        price: 379,
        description: "Wireless, noise-cancelling, with Alexa voice control.",
        category: "headphones",
        product_id: 8
    },
    {
        name: "Beats Solo3",
        price: 199,
        description: "Wireless, on-ear headphones with Apple W1 chip.",
        category: "headphones",
        product_id: 9
    },
    {
        name: "JBL Live",
        price: 129,
        description: "Wireless over-ear headphones with noise-cancelling.",
        category: "headphones",
        product_id: 10
    },
    {
        name: "Sennheiser HD",
        price: 349,
        description: "Wireless, noise-cancelling, high-fidelity sound.",
        category: "headphones",
        product_id: 11
    },
    {
        name: "AKG N700",
        price: 299,
        description: "Wireless, adaptive noise-cancelling, studio-quality sound.",
        category: "headphones",
        product_id: 12
    }
];
for (let i = 0; i < products.length; i++) {
    const name = products[i].name;
    const price = products[i].price;
    const description = products[i].description;
    const category = products[i].category;
    const product_id = products[i].product_id;
    let product = new Product_1.Product(name, price, category, description);
    exports.product_list.push(product);
}
let product_name = (0, exports.prompt)("enter product name  ");
(0, productService_1.showproduct)(product_name);
(0, productService_1.deleteProduct)(product_name);
console.log("total products");
console.log(exports.product_list);
