const obj={};
console.log(obj.address);//undefined
// console.log(obj.address.city); --Error --> Cannot read properties of undefined (reading 'city')
console.log(obj?.address?.city);//undefined

//Accessing nested properties
const user={
    name:"Avi",
    address:{
        city:"Chennai"
    }
}
console.log(user?.address?.city);//Chennai
console.log(user?.location?.city);//Undefined

//2. Accessing Array Elements
let arr= [{ name: "Avi" }, null, { name: "Rahul" }];
console.log(arr[0].name);//Avi
//console.log(arr[1].name);//error -> Cannot read properties of null (reading 'name')
console.log(arr[1]?.name);//undefined

//3. Calling Methods or Functions
const user1 = {
    getName: function(){
        return "Avinash"
    }
  };
  console.log(user1.getName?.()); // "Avinash"
  
  const user2 = {};
  console.log(user2.getName?.()); // undefined (no error)

//4. Dynamic Property Names
const animal={info:{legs:4}};
console.log(animal.info?.["legs"]);//4
console.log(animal.info?.["color"]);//undefined

//Combining with Default Values
const city = user?.address?.town ?? "Unknown City";
console.log(city);//Unknown city

//Stacking Optional Chaining
//You can use ?. as many times as you need in a chain:
const customer = { details: { location: { city: "Paris" } } };
console.log(customer.details?.location?.city); // "Paris"
console.log(customer.details?.address?.city);  // undefined



