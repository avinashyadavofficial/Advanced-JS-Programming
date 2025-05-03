//Promise.all()
// Wait for ALL to succeed 
// Takes an array of promises
// Resolves when all promises resolve
// Rejects if any one promise fails

const p1 = Promise.resolve("Pizza");
const p2 = Promise.resolve("Burger");
const p3 = Promise.resolve("Drink");

Promise.all([p1, p2, p3])
  .then(results => {
    console.log("All ready:", results); // ["Pizza", "Burger", "Drink"]
  })
  .catch(err => {
    console.log("One failed:", err);
});

//But even if one fails such as:
const p4 = Promise.resolve("Pizza");
const p5 = Promise.reject("Burger failed");

Promise.all([p4, p5])
  .then(results => console.log(results))
  .catch(err => console.log("Error:", err)); // Error: Burger failed

