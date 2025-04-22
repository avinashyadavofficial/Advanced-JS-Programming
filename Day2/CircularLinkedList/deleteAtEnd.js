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
function deletionAtEnd(head){
    if(head==null || head.next==head){
        return null;
    }
    let temp=head;
    while(temp.next.next!=head){
        temp=temp.next;
    }
    let delNode=temp.next;
    console.log(delNode.data);
    temp.next=head;
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
let add=deletionAtEnd(head);
print(add);