function f(){
    return 10;
}

function g(){
    return 20;
}

var i = 10; 

// if(i%2==0){
//     var res = f();
// }

// else{
//     var res = g();
// }

//but we can also use IIFE to achieve the same

var res = (function(i) {
    if (i % 2 == 0) {
        return f();
    } else {
        return g();
    }
})(i);

console.log(res); //10