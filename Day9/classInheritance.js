// Class inheritance in JavaScript lets one class (the child) get all the properties and methods of another class 
// (the parent). This makes it easy to reuse code, add new features, and organize your programs

//extends:  links the child class to the parent class so the child gets all the parent’s features.

class Person{
    constructor(name){
        this.name=name;
    }
    Walk(){
        console.log(`${this.name} walks`);
    }
}
class A extends Person{
    Run(){
        console.log(`${this.name} runs`);
    }
}
const a=new A("aaa");
console.log(a.name);//aaa
a.Walk();// aaa walks
a.Run();//aaa runs

//Super:  
// When you make a child class with its own constructor, you must call super() first. 
// This calls the parent’s constructor and sets up this.
//Arrow functions don’t have their own this, so super() can act weird inside them
//You can’t extend non-constructors
class B extends Person{
    constructor(name,age){
        super(name);
        this.age=age;
    }
}
const obj= new B("bbb",21);
console.log(obj.name);//bbb
console.log(obj.age);//21
obj.Walk();//bb walks

class C extends Person{
    Walk(){
        super.Walk();
        console.log("Also called from Person");
    }
}
const obj1=new C("ccc");
obj1.Walk();
//ccc walks
//Also called from Person

//Inheritance chain
//B->Person->Object


//Static
class Parent{
    static hello(){
        console.log("Hello");
    }
}
class Child extends Parent{

}
Child.hello();//Hello


