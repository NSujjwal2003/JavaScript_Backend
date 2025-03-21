function fun(x, fn){
    console.log(x);
    fn();
}

fun(10, function g(){
    console.log('Callback function');
});

// g is a callback function that is passed as an argument to the fun function.