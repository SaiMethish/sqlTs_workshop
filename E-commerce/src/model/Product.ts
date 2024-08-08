export class Product{
    product_id:number;
    title:string;
    price:number;
    category:string;
    description:string;
    constructor(product_id:number, title:string, price:number, category:string, description:string){
        this.product_id=product_id;
        this.title=title;
        this.price=price;
        this.category=category;
        this.description=description;
    }
}