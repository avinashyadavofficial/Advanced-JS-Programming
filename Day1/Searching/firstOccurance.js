// Given a sorted array with duplicates, return the first occurrence of a target number using binary search.
// Input: firstOccurrence([1, 2, 2, 2, 3, 4], 2)  
// Output: 1

function firstOccurence(arr,target){
    let ans=-1;
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
            ans=mid;
            e=mid-1
            
        }
    }
    return ans;
}
let arr=[1, 2, 2, 2, 3, 4];
let res=firstOccurence(arr,2);
console.log(res);