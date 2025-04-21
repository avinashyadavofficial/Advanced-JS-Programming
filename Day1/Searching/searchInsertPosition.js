// Given a sorted array and a target, return the index where it would be inserted in order if not found
// Input: searchInsertPosition([1, 3, 5, 6], 5)  
// Output: 2

// Input: searchInsertPosition([1, 3, 5, 6], 2)  
// Output: 1

function searchInsertPosition(arr,target){
    let s=0;
    let e=arr.length-1;
    
    while(s<=e){
        let mid=Math.floor((s+e)/2);
        if(arr[mid]<target){
            s=mid+1;
        }
        else if(arr[mid]>target){
            e=mid-1;
        }
        else{
            return mid;
        }
    }
    return s;
}
let arr=[1, 3, 4, 6];
let ans=searchInsertPosition(arr,5);
console.log(ans);