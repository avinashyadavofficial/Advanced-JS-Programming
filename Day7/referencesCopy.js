const original={
    name:"Avi",
    address:{
        city:"Chennai"
    }
}
let copy=original;
console.log(copy);//{ name: 'Avi', address: { city: 'Chennai' } }
console.log(original);//{ name: 'Avi', address: { city: 'Chennai' } }
copy.name="Avinash";
console.log(copy);//{ name: 'Avinash', address: { city: 'Chennai' } }
console.log(original);//{ name: 'Avinash', address: { city: 'Chennai' } }
copy.address.city="Lucknow";
console.log(copy);//{ name: 'Avi', address: { city: 'Lucknow' } }
console.log(original);//{ name: 'Avi', address: { city: 'Lucknow' } }