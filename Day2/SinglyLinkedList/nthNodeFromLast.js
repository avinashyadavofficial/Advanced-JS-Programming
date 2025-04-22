class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function nthNodeFromLast(head,k){
    //to find the length of the ll
    let n=0;
    let temp=head;
    while(temp!=null){
        n=n+1;
        temp=temp.next;
    }
    if(k>n) return -1;
    let a=n-k;
    let temp1=head;
    while(a>0){
        temp1=temp1.next;
        a=a-1;
    }
    return temp1.data;
}
let head = new Node(10);
head.next = new Node(15);
head.next.next = new Node(20);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(45); 
let ans =nthNodeFromLast(head,2);
console.log(ans);



