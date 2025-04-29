// Fully clones everything — including all nested structures.

const original={
    name:"Avi",
    address:{
        city:"Chennai"
    }
}
//Ways to deep Copy:
// 1.JSON method (Simple but limited):
const deepCopy=JSON.parse(JSON.stringify(original));
console.log(original);//{ name: 'Avi', address: { city: 'Chennai' } }
console.log(deepCopy);//{ name: 'Avi', address: { city: 'Chennai' } }

//Limitations: 
// 1.cant copy functions
// 2. cant copy special objects like map, set, date

// 2.Libraries like lodash:
// import cloneDeep from 'lodash/cloneDeep';
// const deep=cloneDeep(original);
// console.log(original);
// console.log(deep);
// Pros:
// Handles nested structures.
// Supports functions, Date, Map, Set, etc.
// Handles circular references safely.
// Cons:
// Requires adding an external dependency (lodash).
// Slightly heavier in size and performance for large objects.
