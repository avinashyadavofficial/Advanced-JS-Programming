// 5. Check if a String is an Anagram of Another
// Problem:
// Given two strings, check if they are anagrams (contain the same characters with the same frequency).

// Input:
// str1 = "listen", str2 = "silent"

// Output:
// true

function anagram(str1,str2){
    if(str1.length !== str2.length) return false;
    let mp=new Map();
    for(let char of str1){
        mp.set(char,(mp.get(char)||0)+1);
    }
    for(let char of str2){
        if(!mp.has(char) || mp.get(char)===0){
            return false;
        }
        mp.set(char,mp.get(char)-1);
    }
    return true;
}
let str1="listen";
let str2="silent";
let ans=anagram(str1,str2);
console.log(ans);
