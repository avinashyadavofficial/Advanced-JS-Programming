//When building applications, you often need your own error types to describe specific problems (like ValidationError,
//  HttpError, or NotFoundError). Custom errors make your code easier to understand, debug, and handle.

//Creating CustomError
//1. Simple way: Using Error Directly--->This works, but you don’t get inheritance or custom behavior
const customError=new Error("Its a custom error");
customError.name="CustomErrorr";
try{
    throw customError;
}
catch(err){
    console.log(err.name);//CustomErrorr
    console.log(err.message);//Its a custom error
}

//2. Using Function Constructors (Old Way)
//You can define a function that creates error objects, and set its prototype to Error.prototype:-->Older ES5
function Aerror(message){
    this.message=message;
    this.name="Aerror";
}
Aerror.prototype=Error.prototype;
try{
    throw new Aerror("A error");
}
catch(err){
    console.log(err.name);//Aerror
    console.log(err.message);//A error
}

//3. The Best Way: Extending the Error Class-->Use class and extends for clean, modern custom errors:
//Always call super(message) in the constructor.
//Set the name property for clarity
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name="ValidationErrorr";
    }
}
function test() {
    throw new ValidationError("It is a validation error");
}
try{
    test();
    //throw new ValidationError("It is a validation error");//- can also do like this
}
catch(err){
    console.log(err.name);//ValidationErrorr
    console.log(err.message);//It is a validation error
}


//Using instanceof to Check Error Types
try {
    throw new ValidationError("Its a validation error");
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log("Caught a validation error!");  //Caught a validation error
    }
  }
  //This works for built-in and custom errors, and supports inheritance


//ES2022+: cause in Error (Built-in!)
//Modern JS allows this directly with:
// const e = new Error("Something went wrong", { cause: originalError });
// console.log(e.cause); // originalError
//So your custom error could also do:
// super(message, { cause });


//Cause in Error:
// Why this is useful:
// Debugging: You see both high-level error ("Failed to load config") and the real low-level issue
//  (e.g., "Unexpected token o...")
// Clean Code: You don’t lose context like you do with just throw new Error(...)
function loadConfig() {
    try {
      JSON.parse("not-valid-json");  // will throw
    } catch (err) {
      // we wrap that low-level error using `cause`
      throw new Error("Failed to load config", { cause: err });
    }
}
try {
    loadConfig();
  } catch (err) {
    console.log("Main error:", err.message); // Main error: Failed to load config
    console.log("Caused by:", err.cause.message); //Caused by: Unexpected token 'o', "not-valid-json" is not valid JSON
}

  

  

  



