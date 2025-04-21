class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
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
function size(head){
    let temp=head;
    let sz=0;
    while(temp!=null){
        sz+=1;
        temp=temp.next;
    }
    return sz;
}
function deleteAtElement(head, ele) {
    if (head == null) return "Element Not Found";

    if (ele === head.data) {
        return head.next;
    }

    let temp = head;
    let prev = null;// can be let prev= head also

    while (temp != null) {
        if (temp.data === ele) {
            prev.next = temp.next;
            return head;
        }
        prev = temp;
        temp = temp.next;
    }

    return "Element Not Found";
}

let head=new Node(10);
head.next=new Node(20);
head.next.next=new Node(30);
head.next.next.next=new Node(40);
// head=deleteAtIdx(head,4);
// print(head);
let result = deleteAtElement(head,20);
if (typeof result === "string") {
    console.log(result);
} else {
    head = result;
    print(head);
}

