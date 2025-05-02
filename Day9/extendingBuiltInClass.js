// Why Extend a Built-In Class?
// To customize behavior
// To add helper methods
// To create domain-specific versions
// To preserve prototype chain & polymorphism

//creating your own class that inherits from a built-in JavaScript class, like Array, Map, Set, or others. 
// This lets you add your own methods or change how the built-in class works, while still keeping all its original features

class A extends Array{
    isEmpty(){
        return this.length===0;
    }
}
let arr=new A(1,2,9);
let arr1=new A();
console.log(arr.isEmpty());//false
console.log(arr1.isEmpty());//true
console.log(arr.length);//3
//--->gets all the features of Array and adds its own method isEmpty()

//When you use built-in methods like .filter(), .map(), or .slice() on your extended class,
//  the result is a new object of your custom type (not just a plain array):
//This happens because JavaScript uses the object's constructor property to create the result.
console.log(arr instanceof A);//true
console.log(arr instanceof Array);//true

let filterArr=arr.filter(a=>a%2===0);
console.log(filterArr);//A(1) [ 2 ]
console.log(filterArr instanceof A);//true
console.log(filterArr instanceof Array);//true


//Inheritance chain from above
//arr → A.prototype → Array.prototype → Object.prototype


// Custom Symbol.species
// If you want built-in methods like .filter() to return a regular Array instead of your custom class,
//  you can use a special static getter called Symbol.species:

class B extends Array{
    isEmpty(){
        return this.length===0;
    }
    static get[Symbol.species](){
        return Array;
    }
}
let arr2=new B(2,8,3,9);
let filterArr1=arr2.filter(a=>a%2===0);
console.log(filterArr1);//A(1) [ 2,8]
console.log(filterArr1 instanceof A);//false
console.log(filterArr1 instanceof Array);//true
//Now filterArr1 return a plain Array, not class B.

