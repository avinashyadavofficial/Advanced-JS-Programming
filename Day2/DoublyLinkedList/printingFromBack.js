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
        if(head.prev!=null){
            ans+="<->";
        }
        head=head.prev;
    }
    console.log(ans);
}
let head=new Node(10);
let second=new Node(20);
let third=new Node(30);
head.next=second;
second.prev=head;
second.next=third;
third.prev=second;
print(third);