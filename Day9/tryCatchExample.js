// 1. Basic try...catch
try {
    throw new Error("Oops!");
  } catch (err) {
    console.log("Caught:", err.message);
}
// Caught: Oops!

//2. Creating Custom Errors
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  try {
    throw new ValidationError("Username required!");
  } catch (e) {
    console.log(e.name);    // ValidationError
    console.log(e.message); // Username required!
}
  


  