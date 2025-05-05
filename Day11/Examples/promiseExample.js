// Write a Promise that resolves in 3 seconds with "Success" and logs it with .then()
// If something goes wrong (like shouldFail = true), reject with "Failed" and use .catch().
let a=new Promise((resolve,reject)=>{
    let shouldFail=true;
    if(shouldFail){
        reject("Failed");
    }
    else{
        resolve("Success");
    }
});
a
 .then(ans=>console.log(ans))
 .catch(err=>console.log(err));

//Output: Failed

//Example 2;
let promise = new Promise((resolve, reject) => {
    reject("Oops!");
    resolve("Success!");
  });
  
  promise
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error));

//output: Error:Oops!

new Promise(resolve=>{
    setTimeout(()=>resolve(1),1000);
})
.then(res=>{
    console.log(result);
    return new Promise(resolve=>{
        
    })
})
  
