class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteCycle(head) {
    let slow = head;
    let fast = head;
    let isCycle=false;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow == fast) {
            isCycle=true;
            break;
        }
    }
    if(isCycle==false){
        return;
    }
    slow=head;
    let prev=null;

    if (slow === fast) {
        // Special case: cycle starts from head
        while (fast.next !== slow) {
            fast = fast.next;
        }
        fast.next = null;
        return;
    }

    while(fast!=slow){
        slow=slow.next;
        prev=fast;
        fast=fast.next;
    }
    //fast is at start of cycle and prev is before it
    prev.next=null;
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
head.next.next.next.next = head; 
deleteCycle(head);
print(head);

