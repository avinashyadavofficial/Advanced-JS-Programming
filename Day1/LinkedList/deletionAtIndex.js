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
function deleteAtIdx(head,idx){
    let len=size(head);
    if(idx<0 || idx>=len){
        return "Wrong Index";
    }
    if(idx==0){
        let delNode=head.data;
        head=head.next;
        return head;
    }
    let temp=head;
    let prev=temp;
    while(idx>0){
        prev=temp;
        temp=temp.next;
        idx-=1;
    }
    let delNode=temp.data;
    prev.next=temp.next;
    return head;
}
let head=new Node(10);
head.next=new Node(20);
head.next.next=new Node(30);
head.next.next.next=new Node(40);
// head=deleteAtIdx(head,4);
// print(head);
let result = deleteAtIdx(head, 4);
if (typeof result === "string") {
    console.log(result);
} else {
    head = result;
    print(head);
}

