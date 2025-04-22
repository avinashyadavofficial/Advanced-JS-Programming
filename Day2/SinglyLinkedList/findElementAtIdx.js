class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function size(head){
    let temp=head;
    let sz=0;
    while(temp.next!=null){
        sz++;
        temp=temp.next;
    }
    return sz;
}
function ElementAtIdx(head,idx){
    let len=size(head);
    if(idx<0 || idx>len )return "Wrong idx";
    let temp=head;
    while(idx>0){
        temp=temp.next;
        idx--;
    }
    return temp.data;
}
let head=new Node(10);
head.next=new Node(15);
head.next.next=new Node(20);
head.next.next.next=new Node(40);
head=ElementAtIdx(head,2);
console.log(head);