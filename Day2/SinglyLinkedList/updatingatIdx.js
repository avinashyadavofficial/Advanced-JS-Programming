class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function updateAtIdx(head,idx,ele){
    let temp=head;
    while(idx>0){
        temp=temp.next;
        idx--;
    }
    temp.data=ele;
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
print(head);
console.log("After updating ");
updateAtIdx(head,2,70);
print(head);

