class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function print(node){
    let ans="";
    while(node!=null){
        ans+=node.data;
        if(node.next!=null){
            ans+=" -> ";
        }
        // console.log(node.data);
        node=node.next;
    }
    console.log(ans);
}
let head=new Node(3);
head.next=new Node(6);
head.next.next=new Node(8);
print(head);

