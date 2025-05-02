function withTimestamp(Base) {
    return class extends Base {
      constructor(...args) {
        super(...args);
        this.createdAt = new Date();
      }
    };
  }
  
  class Product {
    constructor(name) {
      this.name = name;
    }
  }
  
  class TimedProduct extends withTimestamp(Product) {}
  
  const item = new TimedProduct("Book");
  console.log(item.name);       // Book
  console.log(item.createdAt);  // current date
  