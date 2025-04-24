function hnRecursive(arr, n) {
    if (n === 0 || arr.length === 0) {
        return 0;
    }
    let max = arr[0];
    let maxi = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxi = i;
        }
    }
    arr.splice(maxi, 1);
    if (n === 1) {
        return max;
    }
    return hnRecursive(arr, n - 1);
}

let arr = [1, 7, 8, 5, 2];
let n = 3;
let result = hnRecursive(arr, n);
console.log(result); 
