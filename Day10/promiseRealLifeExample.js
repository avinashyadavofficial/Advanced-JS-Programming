let food = new Promise((resolve, reject) => {
    let ready = true;
  
    setTimeout(() => {
      if (ready) resolve("Pizza is served!");
      else reject("Kitchen exploded!");
    }, 2000);
});
food
  .then(result => console.log("Customer:", result))
  .catch(err => console.log("Customer complaint:", err))
  .finally(() => console.log("Customer left "));

//output:
// Customer: Pizza is served!
// Customer left 


