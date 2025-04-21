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
function deletionAtBeg(head){
    if(head==null || head.next==null){
        return null;
    }
    let delNode=head.data;
    head=head.next;
    console.log(delNode);
    return head;
}
let head=new Node(10);
head.next=new Node(20);
head.next.next=new Node(30);
head=deletionAtBeg(head);
print(head);
