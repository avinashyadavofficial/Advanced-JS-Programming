class HashTable {
    constructor(size = 10) {
      this.size = size;
      this.buckets = new Array(size);
    }
  
    // Hash function: turns key into a number (index)
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    // Set a key-value pair
    set(key, value) {
      const index = this._hash(key);
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
      // Check if key exists, update if it does
      for (let pair of this.buckets[index]) {
        if (pair[0] === key) {
          pair[1] = value;
          return;
        }
      }
      // If not, add new key-value pair
      this.buckets[index].push([key, value]);
    }
  
    // Get a value by key
    get(key) {
      const index = this._hash(key);
      if (!this.buckets[index]) return undefined;
      for (let pair of this.buckets[index]) {
        if (pair[0] === key) return pair[1];
      }
      return undefined;
    }
  
    // Check if a key exists
    has(key) {
      return this.get(key) !== undefined;
    }
  
    // Remove a key-value pair
    remove(key) {
      const index = this._hash(key);
      if (!this.buckets[index]) return false;
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i][0] === key) {
          this.buckets[index].splice(i, 1);
          return true;
        }
      }
      return false;
    }
  }
  
  // Example usage
  const ht = new HashTable(5);
  ht.set("Avinash", "1234");
  ht.set("Rahul", "5678");
  console.log(ht.get("Avinash")); // "1234"
  console.log(ht.has("Rahul"));   // true
  ht.remove("Rahul");
  console.log(ht.get("Rahul"));//undefined
  