// Why Do We Need async/await?
// Working with .then() chaining can get messy with deeply nested logic.
// async/await makes your code:
// Easier to read 
// Linear in flow (like synchronous code)x
// Still non-blocking 
async function show() {
    let result = await Promise.resolve("Resolved");
    console.log(result); 
  }
  show();
//Resolved  

//await can only be used inside async functions
//It pauses execution of the async function until the Promise is resolved.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function loadData() {
    console.log("Loading...");
    await delay(2000);
    console.log("Loaded!");
  }
  
  loadData();
  