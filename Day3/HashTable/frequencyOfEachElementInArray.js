// 1. Find the Frequency of Each Element in an Array
// Problem:
// Given an array of numbers, count how many times each number appears.

// Input:
// [2,3,2,4,3,2]

// Output:
// {2: 3, 3: 2, 4: 1}

function frequency(arr){
    let mp=new Map();
    for(let i of arr){
        if(mp.has(i)){
            mp.set(i,mp.get(i)+1);
        }
        else{
           mp.set(i,1);
        }
    }
    let obj={};
    for(let [key,val] of mp){
        obj[key]=val;
    }
    return obj;
}
let arr=[2,3,2,4,3,2];
console.log(frequency(arr));
