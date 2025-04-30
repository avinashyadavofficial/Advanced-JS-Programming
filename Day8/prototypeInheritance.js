let animal = {
    walk() {
      console.log("Animal walks");
    }
};
  
let dog = {
    bark(){
        console.log("Dog barks");
    },
    __proto__: animal
};
animal.walk();//Animal walks
dog.walk(); // Animal walks

console.log(Object.keys(dog));//[ 'bark']
for(let keys in dog){
    console.log(keys); //bark , walk
}
for(let key in dog){
    if(dog.hasOwnProperty(key)){
        console.log(key); //bark 
    }
}

dog.walk=function(){
    console.log("Dog walks");
}
animal.walk();//Animal walks
dog.walk(); // Dog walks
console.log(Object.keys(dog));//[ 'bark','walk']
for(let keys in dog){
    console.log(keys); //bark , walk
}
for(let key in dog){
    if(dog.hasOwnProperty(key)){
        console.log(key); //bark ,walk
    }
}
// Note : for..in loop ---->  Iterates over own + inherited properties ---> 	Use hasOwnProperty to filte
