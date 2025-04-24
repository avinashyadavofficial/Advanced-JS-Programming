// 3. Find the First Non-Repeating Character in a String
// Problem:
// Given a string, return the first character that does not repeat.

// Input:
// "aabbcdeff"

// Output:
// "c"
function firstNonRepeating(str){
   str= [...str].sort().join("");
   for(let i =0;i<str.length-1;i+=2){
    if(str[i]!==str[i+1]){
        return str[i];
    }
   }
}
function secondMethod(str){
    let mp=new Map();
    for(let char of str){
        mp.set(char, (mp.get(char) || 0) + 1);
    }
    for(let [key, val] of mp){
        if(val==1){
            return key;
        }
    }
    return null;
}
let str="aabbcdcedff";
let ans=firstNonRepeating(str);
console.log(ans);
let res=secondMethod(str);
console.log(res);