function mergeSort(arr){
    let n=arr.length;
    if(n<=1) return arr;
    let mid=Math.floor(n/2);
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid));
    return merge(left,right);
}
function merge(left,right){
    let i=0;
    let j=0;
    let ans=[];
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            ans.push(left[i]);
            i++;
        }
        else{
            ans.push(right[j]);
            j++;
        }
    }
    return ans.concat(left.slice(i),right.slice(j));
    
}
let arr=[2,4,1,7,8,3,12];
let sortedArr=mergeSort(arr);
console.log(sortedArr);