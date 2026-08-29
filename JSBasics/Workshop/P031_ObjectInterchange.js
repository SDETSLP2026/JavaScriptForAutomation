
let u1={
    name:"Kiran"
}


let u2={
    name:"Deepak"
}


let u3={
    name:"Anu"
}


console.log(u1);//K
console.log(u2);//D
console.log(u3);//A
console.log("------------");

u1=u2;
console.log(u1);//d
console.log(u2);//d
console.log(u3);//a
console.log("------------");

u2=u3;
console.log(u1);//D
console.log(u2);//A
console.log(u3);//A
console.log("------------");

u3=u1;
console.log(u1);//D
console.log(u2);//A
console.log(u3);//D