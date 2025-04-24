// A hash table (or hashmap, dictionary, object) is a key-value pair storage structure where:
// Keys are hashed (turned into a number/index)
// Values are stored at that index
// You can access values instantly via the key (avg O(1))
//  Real-World Examples
// Phonebook: name → number
// Username → user data
// Count frequency of words in a text
// Caching, lookups, configs, etc.
// Most common
let map1 = {
    name: "Aman",
    age: 25
};
console.log(map1);//{ name: 'Aman', age: 25 }
console.log(map1.name);//Aman
// Built-in Map class (better for keys of any type)
let map2 = new Map();
map2.set("fruit", "Mango");
map2.set("number", 10);
console.log(map2);//Map(2) { 'fruit' => 'Mango', 'number' => 10 }
console.log(map2.get("fruit"));//Mango

const myMap = new Map();

myMap.set("Avi", "1234");
myMap.set("Rahul", "5678");

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// Avi = 1234
// Rahul = 5678
  