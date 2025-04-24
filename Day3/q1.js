function hn(arr,n){
    let ans=0;
    while(n>0){
        let a=[];
        let max=arr[0];
        let maxi=0;
        for(let i=1;i<arr.length;i++){
            if(arr[i]>max){
                max=arr[i];
                maxi=i;
            }
        }
        [arr[maxi],arr[arr.length-1]]=[arr[arr.length-1],arr[maxi]];
       // [arr[arr.indexOf(max)],arr[arr.length-1]]= [arr[arr.length-1],arr[arr.indexOf(max)]];
        arr.pop();
        ans=max;
        // for(let i=0;i<arr.length;i++){
        //     if(arr[i]!=max){
        //         a.push(arr[i]);
        //     }
        // }
        // arr=[];
        // for(let i=0;i<a.length;i++){
        //     arr.push(a[i]);
        // }
        // arr=arr.filter(a=>a!==ans);
        n--;
    }
    return ans;
}
let arr=[1,7,8,5,2];
let n=3;
let anss=hn(arr,n);
console.log(anss);