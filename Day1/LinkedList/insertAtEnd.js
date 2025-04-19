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
function insertAtEnd(head,element){
    let newNode=new Node(element);
    if(head==null){
       head=tail=newNode;
       return head;
    }
    else{
        let temp=head;
        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=newNode;
        return head;
    }
}
let head=new Node(5);
head.next=new Node(10);
head.next.next=new Node(14);
head=insertAtEnd(head,50);
print(head);


