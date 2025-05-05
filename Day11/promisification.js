// Promisification is the process of converting a callback-based function (usually Node-style) into a Promise-based one.
// Why?
// Because:
// Callbacks get messy  (callback hell!)
// Promises (and async/await) are cleaner and modern 

//Old style
function readFile(filename, callback) {
    setTimeout(() => {
      callback(null, "File content here");
    }, 1000);
  }
  
  readFile("data.txt", (err, data) => {
    if (err) console.error(err);
    else console.log(data);
});
//File content here

//lets promisify it
//We create a wrapper that returns a Promise 
function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) resolve("File content here");
        else reject("Failed to read");
      }, 1000);
    });
  }
  
  readFilePromise("data.txt")
    .then(data => console.log(data))
    .catch(err => console.error(err));
  
//File content here


// Rule of Thumb:
// For a callback like callback(err, result), we wrap it like:
// function promisify(f) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       f(...args, (err, result) => {
//         if (err) reject(err);
//         else resolve(result);
//       });
//     });
//   };
// }
// You can use this to convert any function that uses a callback into one that uses promises!

//promisifying setTimeout()
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("Waited 2 seconds"));
//Waited 2 seconds

// const fs = require("fs");
// const util = require("util");

// const readFile1 = util.promisify(fs.readFile1);

// readFile1("file.txt", "utf-8")
//   .then(data => console.log(data))
//   .catch(err => console.error( err));

