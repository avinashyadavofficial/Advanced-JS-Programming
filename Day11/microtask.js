// JavaScript has 2 main queues for async operations:
// Queue Type	Used By	Runs After
// Macro-task	setTimeout, setInterval, DOM events	Entire script
// Micro-task	Promises, queueMicrotask, MutationObserver	After every .then() or async op

// Think of it as:
// Run all synchronous code 
// Run all microtasks 
// Then handle macrotasks 

// What’s in the Microtask Queue?
// Anything added via:
// .then() from a Promise
// catch() / finally()
// queueMicrotask(callback)

// Not in microtask:
// setTimeout
// setInterval



console.log("script start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("script end");

// script start
// script end
// Promise resolved
// Timeout
// --> Promises go into the microtask queue, which runs before macrotasks like setTimeout.

Promise.resolve().then(() => {
    console.log("1");
  });
  
  queueMicrotask(() => {
    console.log("2");
  });
  
  console.log("3");
  
//3
//1
//2

// Both then and queueMicrotask go to the microtask queue — but .then() happens first!



