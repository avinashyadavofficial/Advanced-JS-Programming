// Check if Two Arrays Have Any Common Element
// Problem:
// Given two arrays, check if they share at least one common element.

// Input:
// arr1 =[1,2,3], arr2 =[4,5,2]
function commonElement(arr1,arr2){
    let mp=new Map();
    for(let i of arr1){
        mp.set(i,1);
    }
    for(let i of arr2){
        if(mp.has(i)){
            return true;
        }
    }
    return false;
}
let arr1=[1,2,3];
let arr2=[4,5,2];
console.log(commonElement(arr1,arr2));