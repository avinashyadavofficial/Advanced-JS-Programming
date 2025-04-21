class Stack {
    constructor() {
        this.s = [];
    }
    push(element) {
        this.s.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Empty Stack";
        } else {
            return this.s.pop();
        }
    }
    peek() {
        return this.s[this.s.length - 1];
    }
    isEmpty() {
        return this.s.length === 0;
    }
    size() {
        return this.s.length;
    }
    clear() {
        this.s = [];
    }
    print() {
        console.log(this.s);
    }
}

function insertAtBottom(st, item) {
    if (st.isEmpty()) {
        st.push(item);
        return;
    }
    let top = st.pop();
    insertAtBottom(st, item);
    st.push(top);
}

function reverse(st) {
    if (st.isEmpty()) {
        return;
    }
    let temp = st.pop();
    reverse(st);
    insertAtBottom(st, temp);
}

let st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);

console.log("Before reversing:");
st.print();

reverse(st);

console.log("After reversing:");
st.print();
