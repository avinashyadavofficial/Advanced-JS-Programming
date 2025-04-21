function bubbleSort(arr){
    let swap=false;
    let n=arr.length;
    for(let i =0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                swap=true;
            }
        }
        if(swap==false) break;
    }
    
}
let arr=[2,6,3,8,1,5,10];
bubbleSort(arr);
console.log(arr);