// A Promise is a special JavaScript object that acts as a placeholder for a value that will exist in the future.
// “I don’t have the data now, but I promise I’ll get it to you — either successfully or with an error.”
// A Promise is JavaScript’s answer to async work done cleanly.
// | State       | Description                      | Visual            |
// | ----------- | -------------------------------- | ----------------- |
// | `pending`   | Initial state, not settled yet   |  Cooking...      |
// | `fulfilled` | Operation completed successfully |  Served hot   |
// | `rejected`  | Operation failed with an error   |  Burned toast  |
//Once a promise is fulfilled or rejected — it’s settled, and can’t change.

let promise = new Promise((resolve, reject) => {
    // async code here
    resolve("Success"); // call when it's done
    // OR
    reject("Error!");   // call when something fails
});
console.log(promise);//Promise { 'Success' }

//.then()
//Runs on success (resolve):
promise.then(result=>{
    console.log("Result: ",result); //Result:Success
})

//.catch()
//Runs on failure (reject):
promise.catch(error=>{
    console.error("Caught error:",error);
})

//.finally()
//Runs no matter what — like a cleanup:
promise.finally(() => {
    console.log("Done loading");
});
  
//total output is:
// Promise { 'Success' }
// Result:  Success
// Done loading

// Key Rules
//  A promise can only be resolved or rejected once
//  You can chain .then() to pass values along
//  If .then() returns a value → the next .then() gets it
//  If .then() throws → it goes to the nearest .catch()
//  A .catch() can recover and continue the chain
  
// new Promise(() => {...})
//     ↳ resolves? → .then() chain starts
//     ↳ rejects?  → .catch() triggered
//     ↳ either?   → .finally() runs at end
