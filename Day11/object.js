let arr=[
    {name:"A",age:21},
    {name:"B",age:28},
    {name:"C",age:25},
    {name:"D",age:25},
    {name:"E",age:27},
    {name:"F",age:40}
];
let key=Object.keys(arr[0]);
console.table(key);
let table=[];
for(let i=0;i<arr.length;i++){
    table.push(Object.values(arr[i]));
}
console.log(table);
//to change age of "D";
// for (let i = 0; i < table.length; i++) {
//     if (table[i][0] === "D") {
//         table[i][1] = 50;
//         break;
//     }
// }
// console.log(table);
//or
table = table.map(row => {
    if (row[1] === 25) {
        row[1] = 50;
    }
    return row;
});
console.log(table);


//Extract names where age > 40 using .flatMap()
let result=table.flatMap(person=>
    person[1]>40?[person[0]]:[]
)
console.log(result);

//Get all [name, age] pairs where age > 40
let result1 = table.flatMap(person =>
    person[1]> 40 ? [[person[0], person[1]]] : []
);
console.log(result1);
// Output: [['C', 50], ['D',50]]

//Notes:
//if it is object   
// let result = arr.flatMap(person =>
//     person.age > 40 ? [person.name] : []
// );

// let result1 = arr.flatMap(person =>
//     person.age > 25 ? [[person.name, person.age]] : []
// );

