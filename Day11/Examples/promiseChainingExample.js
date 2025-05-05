Promise.resolve(10)
  .then(x => x * 2)
  .then(x => {
    console.log("Half:", x / 2);
    return x;
  })
  .then(x => {
    throw new Error("Oops");
  })
  .catch(err => {
    console.log("Caught Error:", err.message);
  });

  //Output:
  // Half: 10
  // Caught Error: Oops

  
  // Key Learnings:
  // Each .then() receives the returned value from the previous .then().
  // Throwing inside .then() sends control to .catch().
  // Logging and returning are separate — returning controls the chain, logging just outputs.
