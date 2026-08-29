
/*
Object Copy 
-------------
To copy Js object and Array we can use spread operator(...)
-new Object will be created


*/

//array
let a1=[10,20,30,40];
let a2=[...a1,100,...a1,200,...a1];
console.log(a1);//[ 10, 20, 30, 40 ]
console.log(a2);

//object
let user1={
    id:101,
    name:"Smita"
}


let user2={...user1};
console.log(user1);
console.log(user2);

user2.address="Us";
console.log(user1);//{ id: 101, name: 'Smita' }
console.log(user2);//{ id: 101, name: 'Smita', address: 'Us' }

console.log("------------");
//duplication in keys not allowed 
user2={...user1,...user1};
console.log(user2);