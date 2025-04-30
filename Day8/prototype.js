// Every object in JavaScript has a hidden internal link to another object called its prototype ([[Prototype]]), 
// which can be accessed via . __proto__ or Object.getPrototypeOf().
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
}; 
//rabbit.__proto__ = animal; 
console.log(rabbit.eats); // true (inherited from animal)

//PrototypeChain
//rabbit → animal → Object.prototype → null
//If a property/method isn't found on the current object, JavaScript walks up the prototype chain until it finds it 
// or reaches null.

//Setting and Getting Prototoypes

//Modern
Object.setPrototypeOf(rabbit, animal);
Object.getPrototypeOf(rabbit);
console.log(rabbit.eats);

//Deprecated (but still works):
rabbit.__proto__ = animal;


//Constructor Functions and Prototypes
function Person(name){
    this.name=name;
    console.log(this); //Person { name: 'Avinash' }
}
Person.prototype.hello=function(){
    console.log(`Hello ${this.name}`); //Hello Avinash
    console.log(this);//Person { name: 'Avinash' }
};
const user=new Person("Avinash");
user.hello();

//Object.create() --> To make an object with a given prototype:
let dog=Object.create(animal);
console.log(dog.eats);//true
console.log(Object.getPrototypeOf(rabbit) === animal); // true

//Don't Overuse proto
//Use Object.create, Object.setPrototypeOf, and ES6 class syntax when possible. 
// Overusing __proto__ is slower and frowned upon in large apps.







  