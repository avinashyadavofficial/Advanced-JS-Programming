class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function searchElement(head,ele){
    let temp=head;
    while(temp.next!=head){
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
let last=new Node(40);
head.next=second;
second.next=third;
third.next=last;
last.next=head;
let ans=searchElement(head,100);
console.log(ans);
