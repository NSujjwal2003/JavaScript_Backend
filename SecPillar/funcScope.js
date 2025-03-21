if(true){
    var x = 10;
}

console.log(x);

// This will not give error as var is function scoped and x is defined outside the block

function fun(){
    var y = 20;
}

//console.log(y);

// This will give error as y is defined inside the function and is not accessible outside the function

function gun(){
    console.log(z);
    var z = 30;
}
gun();

// This will not give error as z is defined inside the function using var and is accessible inside the function anywhere

function run(){
    console.log(a);
    let a = 40;
}
run();

// This will give error as a is defined inside the function using let and is not accessible before the declaration