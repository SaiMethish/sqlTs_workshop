"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_details = [];
fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json));
