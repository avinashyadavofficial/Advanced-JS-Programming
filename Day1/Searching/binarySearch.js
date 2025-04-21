function binSearch(arr,target){
    let s=0;
    let e=arr.length-1;
    while(s<=e){
        let mid=s+Math.floor((e-s)/2);//let mid =Math.floor((s+e)/2);
        if(arr[mid]>target){
           e=mid-1;
        }
        else if(arr[mid]<target){
            s=mid+1;
        }
        else{
            return mid;
        }
    }
    return -1;
}
let arr=[1,4,7,9,11];
let ans=binSearch(arr,9);
if(ans==-1){
   console.log("Not found");
}
else{
    console.log(ans);
}