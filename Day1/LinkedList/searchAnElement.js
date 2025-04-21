class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function searchElement(head,target){
    let temp=head;
    while(temp.next!=null){
        if(temp.data===target){
            return true;
        }
        temp=temp.next;
    }
    return false;
}
let head=new Node(10);
head.next=new Node(15);
head.next.next=new Node(20);
head.next.next.next=new Node(40);
head=searchElement(head,200);
console.log(head);