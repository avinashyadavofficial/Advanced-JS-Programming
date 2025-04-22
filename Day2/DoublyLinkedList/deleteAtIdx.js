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
function deleteAtIdx(head,idx){
    if(idx<0){
        console.log("Invalid");
        return;
    }
    if(idx==0){
        let delNode=head.data;
        head=head.next;
        return head;
    }
    let temp=head;
    let temp1=null;
    while(idx>0){
        temp1=temp;
        temp=temp.next;
        idx-=1;
    }
    let delNode=temp.data;
    temp1.next=temp.next;
    temp.prev=null;
    if(temp.next!=null){
        temp.next.prev=temp1;
    }
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
head=deleteAtIdx(head,1);
print(head);