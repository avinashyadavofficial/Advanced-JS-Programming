function findAllSubset(str){
    let res=[];
    let ip=str;
    let op="";
    sol(ip,op,res);
    return res;
}
function sol(ip,op,res){
    if(ip.length==0){
        res.push(op);
        return;
    }
    sol(ip.slice(1),op,res);
    sol(ip.slice(1),op+ip[0],res);
}
let ans=findAllSubset("abc");
console.log(ans);