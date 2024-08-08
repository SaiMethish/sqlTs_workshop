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

export const searchProduct=(name:String):number=>{
    let idx:number=-1;
    for(let i=0;i<product_list.length;i++){
        if(product_list[i].title==name){
            idx=i;
        }
    }
    return idx;
}
export const showproduct=(name:string)=>{
    let idx=searchProduct(name);
    if(idx==-1) logger.error("product not found"); 
    else{
        console.log(product_list[idx]);
    }   

}
export const deleteProduct=(name:string)=>{
    let idx=searchProduct(name);
    if(idx==-1) logger.error("product not found");
    else{
        product_list.splice(idx,1);
        logger.info("product deleted");
    }
}
