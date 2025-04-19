class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function print(node){
    while(node!=null){
        console.log(node.data);
        node=node.next;
    }
}
let head=new Node(3);
head.next=new Node(6);
head.next.next=new Node(8);
print(head);

