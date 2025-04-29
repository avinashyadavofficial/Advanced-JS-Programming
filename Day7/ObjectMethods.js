//A method is simply a function stored inside an object.
// const user = {
//     name: "Avinash",
//     greet: function() {//greet is a method
//       console.log("Hello!");
//     }
// };
// const user1 = {
//     greet() {
//       console.log("Hello!");
//     }
// };
 
const user={
    name:"Avi",
    age:21
}
// 1. Object.keys(obj)--> Returns an array of keys.
console.log(Object.keys(user));//[ 'name', 'age' ]

//2. Object.values(obj)--> Returns an array of values.
console.log(Object.values(user)); // [ 'Avi', 21 ]
let ans=Object.values(user);
console.log(ans);//[ 'Avi', 21 ]

//3. Object.entries(obj)--> Returns an array of [key, value] pairs.
console.log(Object.entries(user)); // [ [ 'name', 'Avi' ], [ 'age', 21 ] ]
let ans1=Object.entries(user);
console.log(ans1[0][1]);//Avi

//4 . Object.assign(target, source) --> Copies properties from one object to another. (shallow copy)
const updated = Object.assign({},user,{age:26});
console.log(updated); //{ name: 'Avi', age: 26 }
user.address={
    city:"Chennai"
}
console.log(user);//{ name: 'Avi', age: 21, address: { city: 'Chennai' } }
//to avoid shallow copy of nested objects
const updated1 = Object.assign(updated, user, {
    address: Object.assign({}, user.address, { city: "Lucknow" })
});
console.log(updated1);//{ name: 'Avi', age: 21, address: { city: 'Lucknow' } }
console.log(updated);//{ name: 'Avi', age: 21, address: { city: 'Lucknow' } }

const updated2=Object.assign({},user,{
    address:Object.assign({},user.address,{city:"GKP"})
})
console.log(updated2);//{ name: 'Avi', age: 21, address: { city: 'GKP' } }

const a=Object.assign(updated,updated2.address);
console.log(updated);//{ name: 'Avi', age: 21, address: { city: 'Lucknow' }, city: 'GKP' }

//5. Object.fromEntries()--> creates an object from a list of key/value pairs.
const b=[
    [1,1],
    [2,2],
    [3,3]
]
const obj=Object.fromEntries(b);
console.log(b);//[ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ]
console.log(obj);//{ '1': 1, '2': 2, '3': 3 }


//6. Object.groupBy()
//does not change the original object.
//groups elements of an object according to string values returned from a callback function.
// const details=[
//     {name:"Avi",age:21},
//     {name:"Aman",age:11},
//     {name:"Gaurav",age:40}
// ];
// function sol({age}){
//     return age>18?"eligible":"not eligible";
// }
// const res=Object.groupBy(details,sol);
// console.log(res);

//7. Object.hasOwn(obj, prop)--> Better version of hasOwnProperty.
let ans2=Object.hasOwn(user, "name"); 
console.log(ans2);//true

//8. Object.freeze(obj)---> Makes the object immutable.
//Object.freeze(user);
user.name = "Bob"; //  Can't change
console.log(user.name);//Avi

//9. Object.seal(obj)--> Allows value changes, but no new properties can be added or removed.
Object.seal(user);
console.log(user);//{ name: 'Avi', age: 21, address: { city: 'Chennai' } }
user.name="Avinash";
user.email="abc@gmail.com";
console.log(user);//{ name: 'Avinash', age: 21, address: { city: 'Chennai' } }













  

  