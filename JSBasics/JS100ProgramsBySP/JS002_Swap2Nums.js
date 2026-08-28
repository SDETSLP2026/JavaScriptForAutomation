/*
PS: Swap two variables without a temporary variable.
*/

let a = 15, b = 25;
console.log("Before swapping a = " + a + " & b =" + b);
[a, b] = [b, a];
console.log("After swapping a = " + a + " & b =" + b);