// Imagine you're ordering pizza  from a pizza place that also does burgers , and the drinks .
//  You want everything, and you want to make sure that after getting the pizza you can get the burger and
//   finally the drink – all in sequence!

// Promise chaining is exactly that! Instead of waiting in separate queues for each task to finish,you link each task 
// together in a single chain. The key here is that each step of the promise passes along the result 
// to the next one in the chain.

let orderFood = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pizza  is ready!"), 1000);
  });
  
  orderFood
    .then(msg => {
      console.log(msg);
      return "Burger  is ready!";
    })
    .then(msg => {
      console.log(msg);
      return "Drink  is ready!";
    })
    .then(msg => {
      console.log(msg);
      console.log("Enjoy your meal!");
    })
    .catch(err => {
      console.log("Error during food delivery:", err);
    });
    // Pizza  is ready!
    // Burger  is ready!
    // Drink  is ready!
    // Enjoy your meal!
  
    //The return value of one .then() becomes the input of the next.
    

