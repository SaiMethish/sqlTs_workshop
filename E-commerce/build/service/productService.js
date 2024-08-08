"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.showproduct = exports.searchProduct = exports.addProduct = void 0;
const __1 = require("..");
const logger_1 = require("../Logger/logger");
const addProduct = (product) => {
    const product_id = __1.product_list.length == 0 ? 1 : __1.product_list.length + 1;
    const product_title = product.title;
    const price = product.price;
    const category = product.category;
    const description = product.description;
    __1.product_list.push(product);
    logger_1.logger.info("product added successfully");
};
exports.addProduct = addProduct;
const searchProduct = (name) => {
    let idx = -1;
    for (let i = 0; i < __1.product_list.length; i++) {
        if (__1.product_list[i].title == name) {
            idx = i;
        }
    }
    return idx;
};
exports.searchProduct = searchProduct;
const showproduct = (name) => {
    let idx = (0, exports.searchProduct)(name);
    if (idx == -1)
        logger_1.logger.error("product not found");
    else {
        console.log(__1.product_list[idx]);
    }
};
exports.showproduct = showproduct;
const deleteProduct = (name) => {
    let idx = (0, exports.searchProduct)(name);
    if (idx == -1)
        logger_1.logger.error("product not found");
    else {
        __1.product_list.splice(idx, 1);
        logger_1.logger.info("product deleted");
    }
};
exports.deleteProduct = deleteProduct;
