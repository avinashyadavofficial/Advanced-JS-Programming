// Find Minimum in Rotated Sorted Array
// Input: findMin([4, 5, 6, 7, 0, 1, 2])  
// Output: 0
function findMin(arr){
    let s=0;
    let e=arr.length-1;
    while(s<=e){
        let mid =Math.floor((s+e)/2);
        if(arr[mid]>arr[e]){
           s=mid+1;
        }
        else{
            e=mid-1;
        }
    }
    return arr[s];
}
let arr=[4, 5, 6, 7, 0, 1, 2];
let ans=findMin(arr);
console.log(ans);


