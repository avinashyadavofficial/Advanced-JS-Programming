let arr=[10,20,30,40,50];
let k=3;
let stack=[];
for (let i = k-1; i >= 0; i--) {
    stack.push(arr[i]);
}
arr.splice(0,k);
while(stack.length>0){
    arr.unshift(stack.pop());
}
console.log(arr);