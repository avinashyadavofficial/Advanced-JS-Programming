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
function updateAtIdx(head,idx,ele){
    let temp=head;
    while(idx>0){
        temp=temp.next;
        idx--;
    }
    temp.data=ele;
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
updateAtIdx(head,1,70);
print(head);