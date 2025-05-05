Promise.resolve("Start")
  .then(value => {
    console.log(value);              // "Start"
    return "Step 1";
  })
  .then(value => {
    throw new Error("Something went wrong "); // throws error
  })
  .then(value => {
    console.log("This will never run:", value); // SKIPPED due to error
    return "Step 2";
  })
  .catch(err => {
    console.log("Caught:", err.message);        // "Caught: Something went wrong"
    return "Recovered!";
  })
  .then(value => {
    console.log("After catch:", value);         // "After catch: Recovered!"
    return Promise.reject("Another Error");     // REJECTS manually
  })
  .catch(err => {
    console.log("Final Catch:", err);           // "Final Catch: Another Error"
  });

//Output:
// Start
// Caught: Something went wrong 
// After catch: Recovered!
// Final Catch: Another Error

// Learning:
// Throwing an error in .then() skips next .then() and jumps to .catch().
// .catch() can return a value, continuing the chain from there!
// You can manually trigger another rejection using Promise.reject().

