function selectionSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIdx=i;
        for(let j=i+1;j<n;j++){
           if(arr[j]<arr[minIdx]){
            minIdx=j;
           }
        }
        [arr[i],arr[minIdx]]=[arr[minIdx],arr[i]];
    }
    return arr;
}
let arr=[2,6,3,8,1,5,10];
let sorted=selectionSort(arr);
console.log(sorted);
