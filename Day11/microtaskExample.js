console.log("start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
}).then(() => {
  console.log("promise 2");
});

queueMicrotask(() => {
  console.log("microtask");
});

console.log("end");

// start
// end
// promise 1
// microtask
// promise 2
// setTimeout
