class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
function print(head){
    let ans="";
    while(head!=null){
        ans+=head.data;
        if(head.next!=null){
            ans+="<->";
        }
        head=head.next;
    }
    console.log(ans);
}
function insertAtIndex(head, ele, index) {
    let newNode = new Node(ele);
    if (index < 0) {
        console.log("Invalid index");
        return head;
    }

    if (index === 0) {
        newNode.next = head;
        if (head !== null) head.prev = newNode;
        head = newNode;
        return head;
    }

    let temp = head;
    while (temp !== null && index > 1) {
        temp = temp.next;
        index--;
    }

    if (temp === null) {
        console.log("Index out of bounds");
        return head;
    }

    newNode.next = temp.next;
    if (temp.next !== null) {
        temp.next.prev = newNode;
    }
    temp.next = newNode;
    newNode.prev = temp;

    return head;
}

let head=new Node(10);
let second=new Node(20);
let third=new Node(30);
head.next=second;
second.prev=head;
second.next=third;
third.prev=second;
head=insertAtIndex(head,100,3);
print(head);




