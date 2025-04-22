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
let first=new Node(10);
let second=new Node(20);
let third=new Node(30);
let last=new Node(40);
first.next=second;
second.next=third;
third.next=last;
last.next=first;
print(first);