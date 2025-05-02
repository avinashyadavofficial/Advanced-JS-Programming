//The finally block always runs after try and catch, even if there was a return or throw
try {
    // code
}
catch (err) {
    // handle error
} 
finally {
    console.log("This always runs!");
}
//This always runs