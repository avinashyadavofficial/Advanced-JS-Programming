Promise.resolve("Start")
  .then(val => {
    throw new Error("Fail here");
  })
  .then(val => {
    console.log("Will NOT run");
  })
  .catch(err => {
    console.log("Caught:", err.message); //  Fail here
  });

//Caught: Fail here