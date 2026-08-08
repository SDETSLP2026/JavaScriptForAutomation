/**
1. Arithmatic Operators
+,-,*,/

2. Unary Operators
++,--

3. Relational Operators
<, >, <=, >=

Eqality Operators
Loose equality (==)
Strict equality (===)
Inequality (!=)
Strict inequality (!==)

4. Logical Operators
&&, ||, !

5. Assignment/Short-hand Operators
=, +=, -=, *=, /=

*/


console.log('======Arithemetic Operators======');

let num1=10,num2=5;

console.log(num1+num2); //15
console.log("Addition is: " + (num1+num2)); //15
console.log("Subtraction is: " + (num1-num2)); //5
console.log("Multiplication is: " + (num1*num2)); //50
console.log("Division is: " + (num1/num2)); //2
console.log("Modulus is: " + (num1%num2)); //0

console.log("------Interview Questions------");
console.log(90/0); //Infinity
console.log(-90/0); //-Infinity
console.log("Hello"/0); //NaN - Not a Number
console.log(undefined/0); //NaN - Not a Number
console.log(4/undefined); //NaN - Not a Number
console.log(0/0); //NaN - Not a Number
console.log(null/0); //NaN - Not a Number
console.log(null/5); //0
console.log(0/4); //0


// Number representation for all null type: Number()
console.log(Number(null)); //0
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log("------Unary Operators----------");

/*
    Increment ++
    ===============
    1.Pre-Increment        ++num1  num1=num1+1
    ------------------------------------------------------
    Here, the value will increment first and then use it

    2.Post-Increment       num1++   num1=num1+1
    ------------------------------------------------------
    Here, the value will use first and then increment it


    Decrement --
    ==============
    1.Pre-Decrement     --num1     num1=num1-1
    ------------------------------------------------------
    Here, the value will decrement first and then use it

    2.Post-Decrement    num1--     num1=num1-1
    ------------------------------------------------------
    Here, the value will use first and then decrement it
*/

let x=100;
console.log(x);//100
console.log(++x);//101

let y=200;
console.log(y);//200
console.log(y++);//200
console.log(y);//201

console.log("------------");
let a=190;
let b=a++; //here value will assign first and then increment
console.log(a);//191
console.log(b);//190

let p=587;
let q=p++;
console.log(p);//588
console.log(q);//587

let c=79;
let d=++c;// value will increment first then assign
console.log(c);//80
console.log(d);//80

let i=90;
let j=++i;
console.log(i);//91
console.log(j);//91

let r=65;
let s=r--;
console.log(r);//64
console.log(s);//65

let u=89;
let v=--u;
console.log(u);//88
console.log(v);//88

let m=10;
let n=--m + m--;
console.log(m);//8
console.log(n);//18

console.log("-------Relational Operators--------");
/*
>,>=,<,<=,!=, ==, ===

Test Data
==========
c=d=80 i=j=91 u=v=88 m=8 n=18 a=191 b=190

*/
console.log("less than <: "+(n<u));//true
console.log("less than equal to <=: "+(v<=u));//true
console.log(a<b);//false
console.log("Greater than > : "+(a>b));//true
console.log("greater than and equal to: "+(j>=d));//true
console.log(d>=c);//true
console.log(j>=a);//false
console.log("Not eqaulity != "+(i!=b));//true
console.log(c!=d);//false

/*
To test equality between numbers or between strings /boolean
we use === strict equality (Recommended)
here original values get compared without type coercion(Type casting)

== Loose Equality(automatic coercion)
--------------------------------------
Value will coerced first and then it get compared.

*/

console.log("100" == 100);//true
console.log(null == undefined);//true

console.log("----------");

console.log("100" === 100);//false
console.log(null === undefined);//false

//----------------------------------------------------------------------------------------

console.log("-----Logical Operators-------");
/*

c1      c2          AND(&&)         OR(||)      (!c1)!(NOT)
true    true        true            true            false
true    false       false           true            false
false   true        false           true            true
false   false       false           false           true

Test Data
==========
c=d=80 i=j=91 u=v=88 m=8 n=18 a=191 b=190

*/

console.log("----&&-----");
console.log((c<j) && (a>b));//true
console.log((i===j) && (c>v));//false
console.log((m>n) && (a>u));//false
console.log((m>d) && (u>=b));//false


console.log("----||-----");
console.log((c<j) || (a>b));//true
console.log((i===j) || (c>v));//true
console.log((m>n) || (a>u));//true
console.log((m>d) || (u>=b));//false

console.log("-----!(NOT)------");

console.log(i===j);//true
console.log(!(i===j));//false


console.log("-------short hand Operator---");

/*
+= -= *= /= %= (e.g. x = x + 1 instead x += 1)

*/
let o=0;
o+=10;
console.log(o);//10

o-=5;
console.log(o);//5

o*=2;
console.log(o);//10

o/=2;
console.log(o);