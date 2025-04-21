// 2. Permutations of a String
// Description: Generate all permutations of a string using recursion.

// Input: permute("abc")
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]

function permute(str) {
    let res = [];
    sol(str, "", res);
    return res;
}

function sol(ip, op, res) {
    if (ip.length === 0) {
        res.push(op);
        return;
    }

    for (let i = 0; i < ip.length; i++) {
        let ch = ip[i];
        let left = ip.slice(0, i);
        let right = ip.slice(i + 1);
        let rest = left + right;

        sol(rest, op + ch, res);
    }
}

let str = "abc";
let ans = permute(str);
console.log(ans);
