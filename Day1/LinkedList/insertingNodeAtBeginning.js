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
            ans+="->"
        }
        head=head.next;
    }
    console.log(ans);
}
function insertBeginning(head,element){
    let newNode=new Node(element);
    if(head==null){
        head=tail=newNode;
        return head;
    }
    else{
        newNode.next=head;
        head=newNode;
        return head;
    }
    
}
let head=new Node(5);
head.next=new Node(10);
head.next.next=new Node(13);
head=insertBeginning(head,100);
print(head);
console.log();
console.log("Second LL");
console.log();
let ans=insertBeginning(null,10);
print(ans);
