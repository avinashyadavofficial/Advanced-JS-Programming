// Using Map
// ES6 introduced Map, a better hash table.
// Keys can be any type (objects, numbers, etc.).
// Maintains insertion order.
// Has built-in methods like .size, .set(), .get(), .delete(), .has().
const map = new Map();
map.set("name", "Avinash");
map.set(42, "Answer");
console.log(map.get("name")); // Avinash
console.log(map.size);        // 2
