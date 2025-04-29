//this refers to the object that is calling the method.
const user={
    name:"Avi",
    hi(){
        console.log(this.name);
    }
}
user.hi();//Avi ---> this.name refers to user.name

// Important: this -->  is not static in JS
// It depends on how the function is called, not where it’s defined.
let a=user.hi;//[Function: hi]
console.log(a);//
a();//  undefined (because this is now global, not the user object)


const user1={
    name:"Avi",
    hi:()=>{
        console.log(this.name);
    }
}
user1.hi();//undefined
// Arrow functions don't have their own this
// They inherit this from their surrounding scope (which is usually global).
