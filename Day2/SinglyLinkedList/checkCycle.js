class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function detectCycle(head) {
    if(head==null || head.next== null) return null;
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
}
let head = new Node(10);
head.next = new Node(15);
head.next.next = new Node(20);
head.next.next.next = new Node(40);
head.next.next.next.next = head.next; 

let ans = detectCycle(head);
console.log(ans);

