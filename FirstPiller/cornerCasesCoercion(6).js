console.log(""+0);
console.log(""+(-0));
console.log(""+[]);
console.log(""+{});
console.log(""+[1,2,3]);
console.log(""+[null,undefined]);
console.log(""+[1,2,null,4]);

//tonumber>>>>
console.log(0-"010");
console.log(0-"O10");
console.log(0-"0xb");
console.log(0-0xb);
console.log(1-[]);
console.log([""]-2);
console.log(["0"]-2);

//comparison
console.log(1<2<3); //true 
//1<2 is true and true<3 is 1<3 which is true
console.log(3>2>1); //false
//3>2 is true and true>1 is 1>1 which is false
