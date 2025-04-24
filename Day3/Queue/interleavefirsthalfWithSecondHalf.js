// 5. Interleave the First Half of the Queue with the Second Half
// 📥 Input: [1, 2, 3, 4, 5, 6]
// 📤 Output: [1, 4, 2, 5, 3, 6]

// Split the queue and alternate enqueueing from each half.
function interleave(arr) {
    let mid = Math.floor(arr.length / 2);
    let i = 0;
    let j = mid;
    let ans = [];

    while (i < mid && j < arr.length) {
        ans.push(arr[i]);
        ans.push(arr[j]);
        i++;
        j++;
    }

    return ans;
}

let arr = [1, 2, 3, 4, 5, 6];
let res = interleave(arr);
console.log(res); // [1, 4, 2, 5, 3, 6]

