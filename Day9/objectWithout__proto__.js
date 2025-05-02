let animal = {
    eats: true
};
let dog = Object.create(animal);//same as __proto__:animal --> dog inherits from animal
console.log(Object.getPrototypeOf(dog) === animal); // true
Object.setPrototypeOf(dog, {}); // Now dog has a new prototype (an empty object)

//Object.create method is a bit more powerful, as it has an optional second argument: property descriptors.
//you can also define property flags (like writable, enumerable) at creation time
let rabbit = Object.create(animal, {
    jumps: { 
        value: true 
    }
  });
  console.log(rabbit.eats); // true (from animal)
  console.log(rabbit.jumps); // true (own property)

//Cloning Objects with All Properties and Prototype
//copies everything: enumerable, non-enumerable, data properties, getters/setters, and the prototype
let clone = Object.create(
    Object.getPrototypeOf(animal),
    Object.getOwnPropertyDescriptors(animal)
);
console.log(clone.eats);//true

//"Very Plain" Objects: No Prototype
let dict = Object.create(null);
dict["__proto__"] = "some value";
console.log(dict["__proto__"]); // "some value"

//lets say I am using __proto__

let dictionary = {
    __proto__:animal
};
dictionary["__proto__"] = "some value";
console.log(dictionary["__proto__"]); // {eats:true}

dictionary.name="Avi";
dictionary.__proto__="some value";
console.log(dictionary.name);//Avi
console.log(dictionary.__proto__);//{eats:true}

// Summary Table
// Task	                       Modern Method	                    Old Method (__proto__)
// Get prototype	           Object.getPrototypeOf(obj)	        obj.__proto__ (not advised)
// Set prototype	           Object.setPrototypeOf(obj, p)	    obj.__proto__ = p (not advised)
// Create with prototype	   Object.create(proto)	                { __proto__: proto } (OK)
// Create no-prototype object   Object.create(null)	                { __proto__: null } (OK)


