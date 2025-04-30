let user={
    name:"Avinash"
};
let desc=Object.getOwnPropertyDescriptor(user,"name");
console.log(desc);
/*{
    value: 'Avinash',
    writable: true, --->Can we change the value?
    enumerable: true, ---> Will it show up in loops?
    configurable: true  --->Can we delete or modify it?
} */
    console.log(user.name);//Avinash
    user.name="Rahul"; 
    console.log(user.name);// Rahul
    console.log(Object.keys(user));//['name']
    delete user.name;
    console.log(user.name);//undefined
    delete user;
    console.log(user);//{}


    //define properties
let person={};
Object.defineProperty(person,"name",{
    value:"Avi",
    writable:false,
    enumerable:false,
    configurable:false
});
console.log(person);//{}
console.log(person.name);//Avi
person.name="Rahul"; //--> cant change
console.log(person.name);
console.log(Object.keys(person));//[]--> cant loop
delete person.name;
console.log(person.name);//undefined
person.age=12;
console.log(person);//{age:12}

//Default flag values when you use defineProperty() and don’t set flags? → false.
let obj = {};
Object.defineProperty(obj, "age", { value: 42 });
console.log(Object.getOwnPropertyDescriptor(obj, "age"));
//{ value: 42, writable: false, enumerable: false, configurable: false }
