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
function insertAtBeg(head,ele){
    let newNode=new Node(ele);
    if(head===null){
        return newNode;
    }
    newNode.next=head;
    head.prev=newNode;
    head=newNode;
    return head;
}
let head=new Node(10);
let second=new Node(20);
let third=new Node(30);
head.next=second;
second.prev=head;
second.next=third;
third.prev=second;
head=insertAtBeg(head,40);
print(head);

let ans=insertAtBeg(null,20);
print(ans);


