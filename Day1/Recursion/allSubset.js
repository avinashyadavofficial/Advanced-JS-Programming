// 1. Generate All Subsets of an Array (Power Set)
// Description: Given an array of distinct integers, return all possible subsets.

// Input: subsets([1, 2])
// Output: [[], [1], [2], [1, 2]]

function subsets(arr) {
    let ip = arr;
    let op = [];
    let result = [];
    sol(ip, op, result);
    return result;
}

function sol(ip, op, result) {
    if (ip.length === 0) {
        result.push(op);
        return;
    }

    // let op1 = [...op];
    // let op2 = [...op];
    // op2.push(ip[0]);
    // ip = ip.slice(1);
    sol(ip.slice(1), op, result);
    sol(ip.slice(1), [...op,ip[0]], result);
    
}
console.log(subsets([1, 2]));
