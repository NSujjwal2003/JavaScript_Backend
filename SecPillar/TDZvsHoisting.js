console.log(x); 
var x = 10;

//this gives undefined as x is hoisted to the top of the scope
console.log(y); 
let y = 20;

//this gives error as y is not hoisted to the top of the scope

console.log(z);
const z = 30;

//this gives error as z is not hoisted to the top of the scope
//these two cases of let and const is called TDZ (temporaral dead zone)