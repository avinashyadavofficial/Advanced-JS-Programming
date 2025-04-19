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
function InsertAfterAElement(head,ele,target){
    let newNode=new Node(ele);
    let temp=head;
    while(temp.data!=target && temp.next!=null){
        temp=temp.next;
    }
    newNode.next=temp.next;
    temp.next=newNode;
    return head;
}
let head=new Node(10);
head.next=new Node(20);
head.next.next=new Node(15);
head.next.next.next=new Node(17);
head=InsertAfterAElement(head,50,15);
print(head);
