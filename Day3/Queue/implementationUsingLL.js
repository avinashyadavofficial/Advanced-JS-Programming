class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    enqueue(value) {
      const newNode = new Node(value);
      
      if (this.tail == null) { // Check if tail is null
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    dequeue() {
      if (this.head == null) return null; // Explicit null check
      
      const value = this.head.value;
      this.head = this.head.next;
      
      if (this.head == null) { // Update tail if head becomes null
        this.tail = null;
      }
      this.length--;
      return value;
    }
  
    peek() {
      return this.head != null ? this.head.value : null; // Explicit check
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
    size() {
      return this.length;
    }
  
    clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  
    toArray() {
      const arr = [];
      let current = this.head;
      
      while (current != null) { // Explicit null check
        arr.push(current.value);
        current = current.next;
      }
      return arr;
    }
  }
  
const queue = new Queue();
queue.enqueue("Avi");
queue.enqueue("Rahul");
queue.enqueue("Gaurav");
console.log(queue.toArray()); // [ 'Avi', 'Rahul', 'Gaurav' ]
console.log(queue.dequeue()); // Avi
console.log(queue.peek());    // Rahul
console.log(queue.toArray()); // [ 'Rahul', 'Gaurav' ]
  