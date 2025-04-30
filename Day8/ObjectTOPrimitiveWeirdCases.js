// ✅ 1. [] == ![] — TRUE
console.log([] == ![]);//true
console.log([].toString());  // ""
console.log([].valueOf());   // [] 
//so here [].valueOf() is not converting into primitive so we would use toString();
// when using the abstract equality operator (==), if one side is a string and the other side is a Boolean, 
// JavaScript will convert them to numbers. In this case, the empty string "" converts to 0.

// 2. {} vs {} == {} — FALSE
console.log({}=={});//false

//3.  [] + [] — Empty string
console.log([]+[]);//""

//4. [] + {} vs {} + [] 
console.log([]+{});//[object Object]
console.log({}+[]);//[object Object]

//5. [1] == 1 — TRUE
console.log([1]==1);//true


//6. [1,2] == "1,2" — TRUE
console.log([1,2]=="1,2");//true

//7. null == undefined — TRUE
console.log(null==undefined);//true

//8. true + false — 1
console.log(true+false);//1

//9. {} == "[object Object]" — FALSE
console.log({}=="[object Object");//false

//10.NaN == NaN — FALSE
console.log(NaN==NaN);//false

//example
console.log([null] == 0);//true
console.log(![]==false);//true
console.log([]==false);//true
console.log({} + '');  //"[object Object]"
console.log({ toString() { return "10" } } == 10);//true



