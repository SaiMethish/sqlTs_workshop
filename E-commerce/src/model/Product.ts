export class Product{
    product_id!:number;
    title:string;
    price:number;
    category:string;
    description:string;
    constructor(title:string, price:number, category:string, description:string){
        this.title=title;
        this.price=price;
        this.category=category;
        this.description=description;
    }
}