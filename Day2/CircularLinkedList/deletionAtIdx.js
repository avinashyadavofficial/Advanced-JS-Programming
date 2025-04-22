class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function print(head){
    let ans="";
    let temp=head;
    ans+=temp.data;
    if(temp.next!=null){
        ans+="->";
    }
    temp=temp.next;
    while(temp!=head){
        ans+=temp.data;
        if(temp.next!=head){
            ans+="->";
        }
        temp=temp.next;
    }
    console.log(ans);
}
function deletionAtIdx(head, idx) {
    if (idx < 0 || head == null) {
        console.log("Wrong Index");
        return head;
    }

    let last = head;
    while (last.next !== head) {
        last = last.next;
    }

    // Deleting at index 0
    if (idx === 0) {
        console.log("Deleted:", head.data);
        if (head.next === head) {
            return null; // Only one node
        }
        head = head.next;
        last.next = head;
        return head;
    }

    // Deleting at index > 0
    let temp = head;
    while (temp.next !== head && idx > 1) {
        temp = temp.next;
        idx--;
    }

    if (temp.next === head) {
        console.log("Index out of bounds");
        return head;
    }

    console.log("Deleted:", temp.next.data);
    temp.next = temp.next.next;
    return head;
}

let head=new Node(10);
let second=new Node(20);
let third=new Node(30);
let last=new Node(40);
head.next=second;
second.next=third;
third.next=last;
last.next=head;
print(head);
let add=deletionAtIdx(head,2);
print(add);