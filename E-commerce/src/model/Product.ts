export class Product{
    product_id!:number;
    title:string;
    price:number;
    category:string;
    description:string;
    constructor(title:string, price:number, description:string,category:string,product_id?:number){
        this.title=title;
        this.price=price;
        this.category=category;
        this.description=description;
        if(product_id!=null) this.product_id=product_id;
    }
    toString():string{
        return `name of the product:${this.title} id of the product ${this.product_id} 
        price of the product: ${this.price} category: ${this.category} description: ${this.description}`;
    }
}