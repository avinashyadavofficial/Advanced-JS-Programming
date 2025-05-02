//try...catch is a special way in JavaScript to handle errors (problems) in your code without stopping the whole script.
//  Instead of your program crashing when something goes wrong, you can "catch" the error and decide what to do next
try{
    console.log("Hello");
}
catch(err){
    console.log("Error occured");
}
//print Hello

try{
    aabbs;
}
catch(err){
    console.log("error occured");
}
//error occured

//-->Only runtime errors (errors while running) are caught. Syntax errors (like missing braces) are not caught 
// because the code won’t run at all 

//->Errors in asynchronous code (like inside setTimeout) are not caught unless you put try...catch 
// inside the callback function

// The Error Object
// When an error happens, the catch block gets an error object (usually named err or error).
// This object has useful properties:
// name: The type of error (e.g., "ReferenceError")
// message: Details about what went wrong
// stack: (Not standard, but common) Shows where the error happened
try{
    absbs;
}
catch(err){
    console.log(err.name); //ReferenceError
    console.log(err.message); //absbs is not defined
    console.log(err.stack);// ReferenceError: absbs is not defined at ....
    console.log(err);// ReferenceError: absbs is not defined at ....
}

//Optional Catch Binding
//If you don’t care about the error details, you can write catch without (err):
try{
    aa;
}
catch{

}
//print nothing






