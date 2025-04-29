const user1 = { name: "Avi" };
const user2 = user1;
console.log(user1==user2);//true
console.log(user1===user2);//true
user1.name="Avinash";
console.log(user1);//{ name: 'Avinash' }
console.log(user2);//{ name: 'Avinash' }

const user3={name:"Avinash"};
const user4={name:"Avinash"};
console.log(user3==user4);//false;
console.log(user3===user4);//false;

// In JS, objects are passed by reference, NOT by value.
