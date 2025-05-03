// JavaScript provides built-in static methods attached to the Promise class that help you:
// Wait for multiple promises at once ⏳
// Race promises ⚡
// Handle fulfilled or rejected promises individually 🎯

// These methods are:

// Method	          What it does
// Promise.all()	Waits for all promises to fulfill (or rejects if even one fails)
// Promise.allSettled()	Waits for all promises, regardless of success or failure
// Promise.race()	Resolves/rejects with the first promise that settles (fastest one wins)
// Promise.any()	Resolves with the first fulfilled promise (ignores rejections)
// Promise.resolve()	Converts a value to a resolved promise
// Promise.reject()	Converts a value to a rejected promise