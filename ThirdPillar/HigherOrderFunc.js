// higher order function -> these are functions that take other functions as arguments or return functions as their results

function f(x, fn){
    console.log(x); 
    fn();
}

f(10, function g(){
    console.log(20);
})

// pehle f ko call kiya, usme 10 and function g pass kiya, fir f me x print kiya, then fn() call kiya, to g() call hua, to 20 print hua