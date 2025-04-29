// Setting to null doesn’t force GC — it just removes your reference.
// The Garbage collector will only delete if no one else is referencing it.

// let obj={name:"Avi"};
// obj=null;//object is unreachable
// console.log(obj.name);//Cannot read properties of null (reading 'name')


//-> Even with automatic GC, you can still leak memory if you're not careful.
//case 1: Forgotten references
let obj1={name:"Avinash"};
let obj2=obj1;
obj1=null;
console.log(obj2.name);//"Avinash"-> memory not got free -> stil referenced by obj2;

// Case 2: Global variables never cleaned
let a=new Array(10).fill(3);

// an object becomes unreachable when no variable or closure can reach it.
// Unreachable can also mean a variable goes out of scope (like inside a function).
function f() {
    let temp = { a: 123 };
}
console.log(temp);//temp is not defined
// After function runs, temp is gone → object becomes unreachable
  


