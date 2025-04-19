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
function InsertAtIndex(head,ele,index){
    let newNode=new Node(ele);
    if(index<0){
        console.log("Invalid");
        return head;
    }
    if(index==0){
        newNode.next=head;
        head=newNode;
        return head;
    }
    else{
        let temp=head;
        while(temp!=null && index>1){
            temp=temp.next;
            --index;
        }
        newNode.next=temp.next;
        temp.next=newNode;
        return head;
    }

}
let head=new Node(10);
head.next=new Node(20);
head.next.next=new Node(15);
head.next.next.next=new Node(17);
head=InsertAtIndex(head,50,3);
print(head);