class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element); // Add to rear
    }
  
    dequeue() {
      if (this.isEmpty()) return null;
      return this.items.shift(); // Remove from front (O(n))
    }
  
    peek() {
      if (this.isEmpty()) return null;
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    toArray() {
      return this.items;
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

  