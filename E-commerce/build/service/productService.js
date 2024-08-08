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
const searchProduct = (id) => {
    let idx = -1;
    for (let i of __1.product_list) {
        if (i.product_id == id) {
            idx = id;
            idx = id;
        }
    }
    return idx;
};
exports.searchProduct = searchProduct;
const showproduct = (id) => {
    let idx = (0, exports.searchProduct)(id);
    if (idx == -1)
        logger_1.logger.error("product not found");
    else {
        console.log(__1.product_list[idx].toString());
    }
};
exports.showproduct = showproduct;
const deleteProduct = (id) => {
    let idx = (0, exports.searchProduct)(id);
    if (idx == -1)
        logger_1.logger.error("product not found");
    else {
        __1.product_list.splice(idx, 1);
        logger_1.logger.info("product deleted");
    }
};
exports.deleteProduct = deleteProduct;
