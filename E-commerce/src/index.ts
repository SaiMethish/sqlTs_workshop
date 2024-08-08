import { Product } from "./model/Product";
import { deleteProduct, searchProduct, showproduct } from "./service/productService";
import promptSync from 'prompt-sync'
import {products} from './productdata'
export const prompt=promptSync();
export const product_list: Product[] = [];

  for(let i=0;i<products.length;i++){
    const name=products[i].name;
    const price=products[i].price;
    const description=products[i].description;
    const category=products[i].category;
    const product_id=products[i].product_id;
    let product=new Product(name,price,category,description);
    product_list.push(product);
  }


let product_name=prompt("enter product name  ");
showproduct(product_name);
deleteProduct(product_name);
console.log("total products after deleting ");
console.log(product_list);

