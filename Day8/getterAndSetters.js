//Object Literals
let user={
    fname:"Avinash",
    lname:"Yadav",
    get fullName(){
        return (`${this.fname} ${this.lname}`);
    },
    set fullName(str){
        [this.fname,this.lname]=str.split(" ");
    }
};
console.log(user.fullName);//Avinash Yadav
user.fullName="Rahul Yadav";
console.log(user.fullName);//Rahul Yadav
console.log(user.fname);//Rahul

//In classes
class User {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      if (value.length < 5) throw new Error("Name too short");
      this._name = value;
    }
}
  
let obj = new User("Avinash");
console.log(obj.name); // Avinash
//obj.name = "Avi"; // Error: Name too short

class A{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    get fullName(){
        return (`${this.fname} ${this.lname}`);
    }
    set fullName(str){
        [this.fname,this.lname]=str.split(" ");
    }
}
let obj2=new A("Avinash","Yadav");
console.log(obj2.fullName);//Avinash Yadav
obj2.fullName="Rahul Yadav";
console.log(obj2.fullName);//Rahul Yadav
console.log(obj2.fname);//Rahul
  
//using defineProperty
let obj3={};
let name="Avinash";
Object.defineProperty(obj3,"name",{
    get(){
        return name;
    },
    set(str){
        name=str;
    }
});
console.log(obj3.name);//Avinash
obj3.name="GGG";
console.log(obj3.name);//GGG


//Read Only Property
let obj4={
    get read(){
        return 10;
    }
};
console.log(obj4.read);//10
obj4.read=100;
console.log(obj4.read);//10

let obj5 = {
    get expensiveValue() {
      delete this.expensiveValue;
      this.expensiveValue =  99;
      return this.expensiveValue;
    }
  };
  console.log(obj5.expensiveValue); // 99
  console.log(obj5.expensiveValue); // 99
  
