/*
Branching statements
---------------------

1. break
----------
- break statements are applicable to switch case and loops.
- break will exit the control from the switch/loop scope.

2. continue
------------
- continue statement is applicable for loops.
- continue statement skips the certain part of the code and continue execution till the iteration.

3. return
----------
- return is applicable for function.
- to return any value/result from function, we use return statement.

*/

for(let i=1; i<=10; i++){
    if(i>=5){
        break;
    } else {
        console.log(i); // 1,2,3,4
    }
}

console.log("-----------------------------------------");

for(let i=1; i<=10; i++){
    if(i>5){
        break;
    } else {
        console.log(i); // 1,2,3,4,5
    }
}

console.log("-----------------------------------------");

for(let i=1; i<=10; i++){
    if(i === 7){
        continue;
    } else {
        console.log(i); // 1,2,3,4,5,6,8,9,10 - 7 is skipped & the rest is continued
    }
}

//url validation with array