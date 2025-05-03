// Promise.reject() – Instantly reject
Promise.reject(1)
   .then(a=>console.log(a))
   .catch(err=>console.log("error: ",err));
//error: 1

Promise.reject("Instant Fail")
  .catch(err => console.log(err));
//Instant Fail

