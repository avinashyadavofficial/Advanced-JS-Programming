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
function insertAtEnd(head,ele){
    let newNode=new Node(ele);
    if(head===null){
        return newNode;
    }
    let temp=head;
    while(temp.next!=null){
        temp=temp.next;
    }
    temp.next=newNode;
    newNode.prev=temp;
    return head;
}
let head=new Node(10);
let second=new Node(20);
let third=new Node(30);
head.next=second;
second.prev=head;
second.next=third;
third.prev=second;
head=insertAtEnd(head,40);
print(head);

let ans=insertAtEnd(null,20);
print(ans);


