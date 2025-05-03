// Promise.race() – First to finish wins 
// Returns the first settled promise (either resolve or reject).
const fast = new Promise(resolve => setTimeout(() => resolve("Fast "), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow "), 1000));

Promise.race([fast, slow]).then(result => {
  console.log(result); // Fast 
});

// If the fastest one rejects, the whole race() rejects.
const fast1=new Promise((_, reject)=> setTimeout(()=>reject("Fast"),100));
const slow1 = new Promise(resolve => setTimeout(() => resolve("Slow "), 1000));

Promise.race([fast1, slow1])
  .then(result => {
    console.log(result); // This won't run because fast1 rejects first
  })
  .catch(error => {
    console.log("Error is "+error); //Error is Fast
  });
