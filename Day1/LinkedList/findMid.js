class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function findMid(head){
    if(head==null || head.next==null){
        return head;
    }
    let slow=head;
    let fast=head;
    // while(fast!=null && fast.next!=null){
    //     fast=fast.next.next;
    //     slow=slow.next;
    // }
    // return slow;  ---> this return second middle in even.
    //for first middle
    while(fast.next!=null && fast.next.next!=null){
        fast=fast.next.next;
        slow=slow.next;
    }
    return slow;
}
let head=new Node(10);
head.next=new Node(15);
head.next.next=new Node(20);
head.next.next.next=new Node(40);
head=findMid(head);
console.log(head.data);