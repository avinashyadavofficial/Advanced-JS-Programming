function parent(){
    return class{
        hello(){
            console.log("Hello");
        }
    };
}
class Child extends parent(){
    bye(){
        console.log("Bye");
    }
}
const obj=new Child();
obj.hello();//Hello
obj.bye();//Bye


//This creates a class whose base is picked at runtime.
const Base = Math.random() > 0.5 ? class A {constructor(name){this.name=name;}} : class B {constructor(age){this.age=age;}};
class Dynamic extends Base {
  constructor(arg) {
    super(arg);
    console.log("Dynamic class based on random!");
  }
}
let a=new Dynamic("Avin");
console.log(a.name); //sometimes it prints Avin and sometimes undefined


