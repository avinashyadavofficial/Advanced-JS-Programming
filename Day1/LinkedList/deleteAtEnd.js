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
function deleteAtEnd(head){
    if(head==null || head.next==null){
        return null;
    }
    let temp=head;
    // let prev=temp;
    // while(temp.next!=null){
    //     prev=temp;
    //     temp=temp.next;
    // }
    // let delNode=temp.data;
    // prev.next=null;
    while(temp.next.next!=null){
        temp=temp.next;
    }
    let delNode=temp.next;
    console.log(delNode.data);
    temp.next=null
    return head;
}
let head=new Node(10);
head.next=new Node(20);
head.next.next=new Node(30);
head.next.next.next=new Node(40);
head=deleteAtEnd(head);
print(head);
