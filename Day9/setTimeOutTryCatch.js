// try...catch works synchronously
// If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:
try {
    setTimeout(function() {
      abshdh; // script will die here
    }, 1000);
} 
catch (err) {
    console.log( "won't work" );
}
//hence this wont work --> it wont print anything not even catch error
//to run this-->
setTimeout(function() {
    try{
        anfhf;
    }
    catch{
        console.log("error ");//print error
    }
})
