function insertionSort(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let j=i-1;
        let key=arr[i];
        for(;j>=0 && key<arr[j];j--){
            arr[j+1]=arr[j];
        }
        arr[j+1]=key;
    }
}
let arr=[2,6,4,8,1];
insertionSort(arr);
console.log(arr);