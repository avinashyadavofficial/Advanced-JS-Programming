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
function insertAtEnd(head,ele){
    let newNode=new Node(ele);
    if(head==null){
        newNode.next=newNode;
        return newNode;
    }
    let temp=head;
    while(temp.next!=head){
        temp=temp.next;
    }
    let last=temp;
    last.next=newNode;
    newNode.next=head;
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
let add=insertAtEnd(head,5);
print(add);
add=insertAtEnd(head,100);
print(add);