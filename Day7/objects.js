//Object in JS -> dynamic-> we can add, delete or modify at runtime
let user={
    name:"Avi",
    age:21
}
console.log(user);//{ name: 'Avi', age: 21 }
user.name="Avinash";
console.log(user);//{ name: 'Avinash', age: 21 }
user.email="avi@abc.com";
console.log(user);//{ name: 'Avinash', age: 21, email: 'avi@abc.com' }
delete user.age;
console.log(user);//{ name: 'Avinash', email: 'avi@abc.com' }

//Object keys are always string
//Numbers are auto-converted to strings as keys!
let obj={
    1:1,
    2:2,
    3:3
}
console.log(Object.keys(obj));//[ '1', '2', '3' ]
console.log(Object.entries(obj));//[ [ '1', 1 ], [ '2', 2 ], [ '3', 3 ] ]
console.log(Object.values(obj));//[1,2,3]
let obj2=Object.assign(obj);//shallow copy
console.log(obj2);//{ '1': 1, '2': 2, '3': 3 }



