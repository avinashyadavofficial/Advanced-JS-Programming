// Find Peak Element
// A peak element is one that is greater than its neighbors. Implement a binary search-based method to find a peak.
// (Assume nums[i] ≠ nums[i+1])
// Input: findPeakElement([1, 2, 3, 1])  
// Output: 2  // index of 3

// Input: findPeakElement([1, 2, 1, 3, 5, 6, 4])  
// Output: 5  // index of 6 or 2 (index of 1) — both are peaks
function findPeakElement(arr){
    let s=0;
    let e=arr.length-1;
    while(s<=e){
        let mid =Math.floor((s+e)/2);
        if(arr[mid]>arr[mid+1]){
           e=mid;
        }
        else{
            s=mid+1;
        }
    }
    return s;
}
let arr=[1,4,7,9,11];
let ans=findPeakElement(arr);
console.log(ans);

