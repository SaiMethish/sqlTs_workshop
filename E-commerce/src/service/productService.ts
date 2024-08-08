import { product_list } from "..";
import { logger } from "../Logger/logger";
import { Product } from "../model/Product";

export const addProduct=(product:Product)=>{
    const product_id=product_list.length==0?1:product_list.length+1;
    const product_title=product.title;
    const price=product.price;
    const category=product.category;
    const description=product.description;
    product_list.push(product);
    logger.info("product added successfully");
}

export const searchProduct=(id:number):number=>{
    let idx:number=-1;
    for(let i of product_list){
        if(i.product_id==id){
            idx=id;
            idx=id;
        }
    }
    return idx;
}
export const showproduct=(id:number)=>{
    let idx=searchProduct(id);
    if(idx==-1) logger.error("product not found"); 
    else{
        console.log(product_list[idx].toString());
    }   

}
export const deleteProduct=(id:number)=>{
    let idx=searchProduct(id);
    if(idx==-1) logger.error("product not found");
    else{
        product_list.splice(idx,1);
        logger.info("product deleted");
    }
}
