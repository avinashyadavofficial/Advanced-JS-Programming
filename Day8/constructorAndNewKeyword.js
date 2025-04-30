function User(name){
    this.name=name;
    this.age=21
}
const obj1=new User("Avinash");
console.log(obj1);//User { name: 'Avinash', age: 21 }
let obj2=new User("Avi",age=31);
console.log(obj2);//User { name: 'Avi', age: 21 }

const obj3={
    name:"Avinash",
    age:21

}
console.log(obj3 instanceof User);//false
console.log(obj1 instanceof User);//true
const objj={
    name:"Aviii",
    age:21,
    __proto__: User.prototype
}
console.log(objj instanceof User);//true

const obj4=User("Aci");
console.log(obj4);//undefined--> this now refers to global object (in non-strict mode)
// In strict mode, it throws an error: Cannot set property 'name' of undefined

//Constructor Return Behavior
function A(){
    this.name="Avi"
    return 2;
}
const a=new A();
console.log(a.name);//Avi --> If it returns a primitive, it's ignored.

function B(){
    this.name="Avi"
    return {name:"Gaurav"};
}
const b=new B();
console.log(b.name);//Gaurav --> If constructor returns an object, it overrides the return.

