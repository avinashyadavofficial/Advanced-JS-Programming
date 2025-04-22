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
function deleteAtEnd(head){
    let temp=head;
    while(temp.next.next!=null){
        temp=temp.next;
    }
    let delNode=temp.next;
    console.log(`the data of deleted node is ${delNode.data}`);
    temp.next=null;
    return head;
}
let head=new Node(10);
let second=new Node(20);
let third=new Node(30);
head.prev=null;
head.next=second;
second.prev=head;
second.next=third;
third.prev=second;
third.next=null;
print(head);
head=deleteAtEnd(head);
print(head);