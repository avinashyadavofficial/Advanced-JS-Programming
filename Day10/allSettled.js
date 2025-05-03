// Promise.allSettled() – Wait for all, no matter what 
const p1 = Promise.resolve("Done");
const p2 = Promise.reject("Oops");

Promise.allSettled([p1, p2]).then(results => {
  console.log(results);
});

// [
//     { status: 'fulfilled', value: 'Done' },
//     { status: 'rejected', reason: 'Oops' }
// ]

