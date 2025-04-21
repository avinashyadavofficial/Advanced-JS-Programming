function linSearch(arr,target){
   for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
        return i;
    }
   }
   return -1;
}
let arr=[1,4,7,9,11];
let ans=linSearch(arr,90);
if(ans==-1){
   console.log("Not found");
}
else{
    console.log(ans);
}