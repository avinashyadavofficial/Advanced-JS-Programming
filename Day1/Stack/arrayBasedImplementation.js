class Stack{
    constructor(){
        this.s=[];
    }
    push(element){
        this.s.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "Empty Stack";
        }
        else{
            return this.s.pop();
        }
    }
    peek(){
        return this.s[this.s.length-1];
    }
    isEmpty(){
        
        return this.s.length===0;
    }
    size(){
        
        return this.s.length;
    }
    clear(){
        this.s=[];
    }
}
let st=new Stack();
st.push(10);
st.push(15);
st.pop();
console.log(st.pop());//10
console.log(st.isEmpty());//true
st.push(17);
st.push(25);
console.log(st);//Stack { s: [ 17, 25 ] }
console.log(...[st]);//Stack { s: [ 17, 25 ] }
console.log(st.push(40)); //undefined
console.log(st.isEmpty()); //false
console.log(st.peek());//40
console.log(st.size());//3
console.log(st.clear());//undefined
console.log(st.size());//0