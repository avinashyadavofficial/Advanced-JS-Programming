// 4. Find if a Pair with a Given Sum Exists in Array
// Problem:
// Given an array and a target sum, check if any two numbers add up to the target.

// Input:
// arr =[1,4,6,8], target = 10

// Output:
// true (since 4 + 6 = 10)

function pairWithGivenSumExist(arr, target){
    let mp=new Map();
    for(let i of arr){
        if(mp.has(target-i)){
            return true;
        }
        mp.set(i,i);
    }
    return false;
}
let arr=[1,4,6,8];
let target=10;
let ans=pairWithGivenSumExist(arr,target);
console.log(ans);//true