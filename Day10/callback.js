// A callback is a function that you pass as an argument to another function, so that the other function can "call back" 
// (execute) your function later
// for handling things that happen asynchronously (like loading files, waiting for user input, or fetching data 
// from a server

//1. Passing a Function as an Argument
function hello(name,callback){
    console.log('Hi '+name);
    callback();
}
function bye(){
    console.log("Bye");
}
hello("Avinash",bye);
//Hi Avinash
//Bye

//2. Callback for Calculations
function display(result){
    console.log("Result: "+result);
}
function add(a,b,callback){
    let sum=a+b;
    callback(sum);
}
add(4,8,display);//Result: 12

//3. Array Methods Use Callbacks
let arr=[2,6,9,3];
arr.forEach(function(num){
    console.log(num*2);
});
//4,12,18,6
//The function inside forEach is a callback, run for each array item

//4.Asynchronous Callbacks
function sayHello() {
    console.log("Hello after 2 seconds");
}  
setTimeout(sayHello, 2000); // sayHello runs after 2 seconds


//CallBack Hell and Pyramid Of Doom
// When you have to do many things in sequence, each requiring a callback, your code can become deeply 
// nested and hard to read:
// This is called callback hell or pyramid of doom.
// It's hard to read and maintain.

// To avoid : Use modern alternatives like Promises or async/await
  
// getData(userId, (user) => {
//     getPosts(user, (posts) => {
//       getComments(posts, (comments) => {
//         console.log("Done!");
//       });
//     });
// });
  
