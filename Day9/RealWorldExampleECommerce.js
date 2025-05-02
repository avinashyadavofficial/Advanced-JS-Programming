class Product{
    constructor(title,price){
        this.title=title;
        this.price=price;
    }
    getSummary(){
        return `${this.title} costs Rs.${this.price}`;
    }
}
class Book extends Product{
    constructor(title,price,author){
        super(title,price);
        this.author=author;
    }
    getSummary(){
        return `${super.getSummary()} by ${this.author}`;
    }
}
const b=new Book("ABC",1000,"Avinash");
console.log(b.getSummary());