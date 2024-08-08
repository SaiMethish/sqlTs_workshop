import { product_list } from "..";
import { logger } from "../Logger/logger";
import { Product } from "../model/Product";

const addProduct=(product:Product)=>{
    const product_id=product_list.length==0?1:product_list.length+1;
    const product_title=product.title;
    const price=product.price;
    const category=product.category;
    const description=product.description;
    product_list.push(product);
    logger.info("product added successfully");
}

const deleteProduct=(id:number)=>{
    let idx:number=-1;
    for(let i of product_list){
        if(i.product_id==id){
            idx=id;
            break;
        }
    }
    if(idx==-1) logger.error("product not found");
    else{
        product_list.splice(idx,1);
        logger.info("product added successfully");
    }
}

