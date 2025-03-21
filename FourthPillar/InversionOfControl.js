function doTask(g, x){
    g(x*x); 
}//team A

doTask(function helper(num){
    console.log('your order price is: ', num);
}, 10); //team B

