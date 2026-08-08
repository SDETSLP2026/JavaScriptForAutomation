/*
validate student marks
marks>=90===>A
marks>=95===>A++
otherwise B
*/


let marks=96;

if(marks>=90){
    if(marks>=95){
        console.log("A++");
    }else{
        console.log("A");
    }
}else{
    console.log("B")
}