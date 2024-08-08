import { Product } from "./model/Product";
import { deleteProduct, searchProduct, showproduct } from "./service/productService";
import promptSync from 'prompt-sync'
export const prompt=promptSync();
export const product_list: Product[] = [];


const product1 = new Product(
    "Asus TUF",
    599,
    "15.6-inch Full HD display, Intel i5, 8GB RAM, 256GB SSD.",
    "laptops"
);
product1.product_id = 1;
product_list.push(product1);

const product2 = new Product(
    "HP Envy",
    799,
    "14-inch Full HD display, Intel i7, 16GB RAM, 512GB SSD.",
    "laptops"
);
product2.product_id = 2;
product_list.push(product2);

const product3 = new Product(
    "iPhone 12",
    999,
    "6.1-inch OLED display, A14 Bionic chip, 128GB storage.",
    "mobile phones"
);
product3.product_id = 3;
product_list.push(product3);

const product4 = new Product(
    "Galaxy S21",
    699,
    "6.5-inch AMOLED display, Snapdragon 888, 256GB storage.",
    "mobile phones"
);
product4.product_id = 4;
product_list.push(product4);

const product5 = new Product(
    "RTX 3060",
    499,
    "NVIDIA GeForce RTX 3060, 12GB GDDR6.",
    "graphics cards"
);
product5.product_id = 5;
product_list.push(product5);

const product6 = new Product(
    "RX 6700",
    699,
    "AMD Radeon RX 6700 XT, 12GB GDDR6.",
    "graphics cards"
);
product6.product_id = 6;
product_list.push(product6);

const product7 = new Product(
    "Sony WH1000",
    348,
    "Industry-leading noise canceling with Dual Noise Sensor technology.",
    "headphones"
);
product7.product_id = 7;
product_list.push(product7);

const product8 = new Product(
    "Bose 700",
    379,
    "Wireless, noise-cancelling, with Alexa voice control.",
    "headphones"
);
product8.product_id = 8;
product_list.push(product8);

const product9 = new Product(
    "Beats Solo3",
    199,
    "Wireless, on-ear headphones with Apple W1 chip.",
    "headphones"
);
product9.product_id = 9;
product_list.push(product9);

const product10 = new Product(
    "JBL Live",
    129,
    "Wireless over-ear headphones with noise-cancelling.",
    "headphones"
);
product10.product_id = 10;
product_list.push(product10);

const product11 = new Product(
    "Sennheiser HD",
    349,
    "Wireless, noise-cancelling, high-fidelity sound.",
    "headphones"
);
product11.product_id = 11;
product_list.push(product11);

const product12 = new Product(
    "AKG N700",
    299,
    "Wireless, adaptive noise-cancelling, studio-quality sound.",
    "headphones"
);
product12.product_id = 12;
product_list.push(product12);


let product_name=prompt("enter product name  ");
showproduct(product_name);
deleteProduct(product_name);
console.log("total products");
console.log(product_list);

