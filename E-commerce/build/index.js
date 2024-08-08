"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_list = exports.prompt = void 0;
const Product_1 = require("./model/Product");
const productService_1 = require("./service/productService");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const productdata_1 = require("./productdata");
exports.prompt = (0, prompt_sync_1.default)();
exports.product_list = [];
for (let i = 0; i < productdata_1.products.length; i++) {
    const name = productdata_1.products[i].name;
    const price = productdata_1.products[i].price;
    const description = productdata_1.products[i].description;
    const category = productdata_1.products[i].category;
    const product_id = productdata_1.products[i].product_id;
    let product = new Product_1.Product(name, price, category, description);
    exports.product_list.push(product);
}
let product_name = (0, exports.prompt)("enter product name  ");
(0, productService_1.showproduct)(product_name);
(0, productService_1.deleteProduct)(product_name);
console.log("total products after deleting ");
console.log(exports.product_list);
