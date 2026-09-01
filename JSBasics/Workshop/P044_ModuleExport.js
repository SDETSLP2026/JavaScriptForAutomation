/*
Any file/folder structure in JS, we call it as module
export: to share variable,class,function
import: to read exported data use import
*/

export let browserName = "Chrome";

export function getData(){
    console.log("This is getData() function, as an automation test data.");
}

export class Product{
    
    //Global variables
    pid;
    pname;

    constructor(pid, pname){
        this.pid = pid;
        this.pname = pname;
    }

    getInfo(){
        console.log(this.pid+" : "+this.pname);
    }
}