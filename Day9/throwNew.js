//Using throw to Create Your Own Errors
//You can throw anything (a string, number, object), but it’s best to use Error objects for consistency
//throw new Error("Something is wrong!");
let error=new Error("Something is wrong");
console.log(error.message);//Something is wrong
console.log(error.name);//Error

// try {
//         aaaa;
// } 
// catch (err) {
//     if (err instanceof SyntaxError) {
//         console.log(err.message);
//     } 
//     else {
//           throw err; // rethrow unknown errors
//     }
// }

function readData() {
    let json = '{ "age": 30 }';
  
    try {
      blabla(); // error!
    } catch (err) {
      // ...
      if (!(err instanceof SyntaxError)) {
        throw err; // rethrow (don't know how to deal with it)
      }
    }
}
  
  try {
    readData();
  } catch (err) {
    console.log( "External catch got: " + err ); //External catch got: ReferenceError: blabla is not defined
}
