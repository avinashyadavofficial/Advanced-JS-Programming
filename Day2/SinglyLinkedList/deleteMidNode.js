class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteMidNode(head) {
    let slow = head;
    let fast = head;
    let prev=slow;
    while (fast.next!= null && fast.next.next != null) {
        fast = fast.next.next;
        prev=slow;
        slow = slow.next;
    }    
    prev.next=slow.next;
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
deleteMidNode(head);
print(head);

