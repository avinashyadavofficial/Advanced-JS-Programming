// Promise.any() – First to succeed wins 
// Similar to race, but only resolves when the first fulfilled promise comes through. Ignores rejected ones.
const p1 = Promise.reject("Fail 1");
const p2 = Promise.resolve("Success ");
const p3 = Promise.reject("Fail 2");

Promise.any([p1, p2, p3])
  .then(result => console.log(result)) // Success 
  .catch(err => console.log("All failed", err));


// /If all promises fail, Promise.any() throws AggregateError.
const p4=Promise.reject("Fail3");
const p5=Promise.reject("Fail4");
const p6=Promise.reject("Fail5");

Promise.any([p4,p5,p6])
   .then(res=>console.log(res))
   .catch(err=>console.log("All failed : ",err));

//    All failed :  [AggregateError: All promises were rejected] {
//     [errors]: [ 'Fail3', 'Fail4', 'Fail5' ]
//   }