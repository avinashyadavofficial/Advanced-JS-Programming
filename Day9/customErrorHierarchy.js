//You can make errors that inherit from other custom errors, forming a hierarchy:
class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name; // Auto-sets correct name
    }
}
  
class ValidationError extends MyError {}
class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.property = property;
    }
}
  
try {
    throw new PropertyRequiredError("age");
} catch (err) {
    console.log(err.name);     // PropertyRequiredError
    console.log(err.message);  // No property: age
    console.log(err.property); // age
}
//This makes it easy to create many specific error types with less code



  