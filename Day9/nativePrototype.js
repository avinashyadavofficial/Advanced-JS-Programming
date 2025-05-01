// When you create an object from a built-in constructor (like Array, Date, Function), 
// it automatically inherits from a native prototype.
let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
//JavaScript attaches a prototype automatically based on the constructor used.

console.log(arr.map);//[Function:map]
console.log(Object.getPrototypeOf(arr)==Array.prototype);//true
console.log(Object.getPrototypeOf(arr)==Array.__proto__);//false
console.log(Array.__proto__==Object.prototype);//false
console.log(Array.prototype.__proto__==Object.prototype);//true


console.log(arr.__proto__ === Array.prototype);             //  true
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

console.log(Array.__proto__ === Function.prototype);        //  true
console.log(Object.__proto__ === Function.prototype);       //  true

console.log(Array.prototype.__proto__ === Object.prototype); //  true

/*
Array (constructor function)
  └── its prototype: Array.prototype → for all arrays
  └── its __proto__: Function.prototype

*/


let str = "Avinash";
// This works like:
str.__proto__ === String.prototype; // true
String.prototype.__proto__ === Object.prototype; // true
//str → String.prototype → Object.prototype → null


//Functions
function greet() {}
console.log(greet.bind); // [Function bind()] 
console.log(greet.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__==Object.prototype);//true

//Object Prototype
let user={name:"Avinas"};
console.log(user.toString());//[object Object]

//Adding new methods in array
if(!Array.prototype.first){
    Array.prototype.first=function(){
        return this[0];
    }
}
let a=[1,4,9];

console.log(a.first());//1

console.log(Object.getOwnPropertyNames(Function.prototype));//all methods of functions such as length
console.log(Object.getPrototypeOf(() => {}));//{}
