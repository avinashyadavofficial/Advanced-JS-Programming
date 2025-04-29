//Shallow Copy
// When you create a shallow copy:
// Only the first level is copied.
// Nested objects are still referenced, not fully cloned.

const original={
    name:"Avi",
    address:{
        city:"Chennai"
    }
}
const shallowCopy={...original};
console.log(shallowCopy==original);//false

shallowCopy.name="Avinash";

//First layer copied.
console.log(shallowCopy.name);//Avinash
console.log(original.name);//Avi

// Inner objects still shared!
shallowCopy.address.city="Lucknow";
console.log(shallowCopy.address.city);//Lucknow
console.log(original.address.city);//Lucknow

console.log(shallowCopy);//{ name: 'Avinash', address: { city: 'Lucknow' } }
console.log(original);//{ name: 'Avi', address: { city: 'Lucknow' } }



