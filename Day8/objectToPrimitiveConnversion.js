let user={name:"Avinash"};
console.log(user+1);//[Object Object 1]

//use of toString() and valueOf()
let person={
    name:"Avi",
    age:21,
    toString(){
        return this.name;
    },
    valueOf(){
        return this.age;
    }
};
console.log(String(person));//Avi -- toString() is used
console.log(+person);//21 --> valueOf() is used
console.log(person+5);//26--> valueOf() is used

// Symbol.toPrimitive
let person1={
    name:"Avi",
    age:21,
    [Symbol.toPrimitive](hint){
        if(hint=="string") return this.name;
        return this.age;
    }
};
console.log(String(person));//Avi 
console.log(`${person1}`);//Avi
console.log(person1);
/*{
    name: 'Avi',
    age: 21,
    [Symbol(Symbol.toPrimitive)]: [Function: [Symbol.toPrimitive]]
} */
console.log(+person);//21 
console.log(person+5);//26

//If No Method Returns a Primitive --> TypeError
let user1={
    toString(){
        return {};
    },
    valueOf(){
        return {};
    }
}
console.log(user1+1);//Cannot convert object to primitive value as --> Both methods returned objects, not primitives.

