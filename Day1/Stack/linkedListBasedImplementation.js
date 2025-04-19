class Node{
  constructor(data){
    this.data=data;
    this.next=null;
  }
}
class LLStack{
  constructor(){
    this.top=null;
    this.size=0;
  }
  push(element){
    let newNode=new Node(element);
    newNode.next=this.top;
    this.top=newNode;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) return null;
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  peek() {
    return this.top?.value || null;
  }

  isEmpty() {
    return this.size === 0;
  }
}
let st=new LLStack();
st.push(10);
st.push(18);
st.pop();
console.log(st); //LLStack { top: Node { data: 10, next: null }, size: 1 }