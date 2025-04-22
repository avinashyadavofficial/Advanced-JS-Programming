class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
function SearchElement(head,ele){
    let temp=head;
    while(temp!=null){
        if(temp.data===ele){
            return true;
        }
        temp=temp.next;
    }
    return false;
}
let head=new Node(10);
let second=new Node(20);
let third=new Node(30);
head.prev=null;
head.next=second;
second.prev=head;
second.next=third;
third.prev=second;
third.next=null;
let ans= SearchElement(head,220);
console.log(ans);