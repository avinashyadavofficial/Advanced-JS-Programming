// When using promises, errors don’t throw like regular JS. They travel via the .catch() block.

new Promise((resolve, reject) => {
    // something goes wrong
    reject("Oops! Something went wrong");
  })
  .then(result => console.log(result))
  .catch(error => console.error("Caught:", error));

//Caught: Oops! Something went wrong


// Flow:
// reject() → skips .then()
// goes directly to .catch()


//if Error Occurs in .then()
Promise.resolve("data")
  .then(result => {
    throw new Error("Fail in then");
  })
  .catch(err => console.error("Caught in catch:", err.message)); 
//Caught in catch: Fail in then


// Syntax	    Works for...
// .catch()	    Promise rejections
// try/catch	Works inside async/await only

//Unhandled Rejection
// new Promise((_, reject) => reject("Boom"))
// No catch —  will log warning: UnhandledPromiseRejectionWarning



