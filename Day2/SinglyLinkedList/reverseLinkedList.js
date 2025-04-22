class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function reverseLL(head){
    let prev=null;
    let next;
    let curr=head;
    while(curr!=null){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
}
function print(head){
    let ans="";
    while(head!=null){
       ans+=head.data;
       if(head.next!=null){
        ans+="->";
       }
       head=head.next;
    }
    console.log(ans);
}
let head = new Node(10);
head.next = new Node(15);
head.next.next = new Node(20);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(45); 
head=reverseLL(head);
print(head);

