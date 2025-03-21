let x=setInterval(function exec(){
    console.log("hii sanskar");
},1000);

console.log(x);
clearInterval(x);


//here x is the id of the interval which is returned by the setInterval function
//clearInterval is used to stop the interval
//diff runtime have diff value of x, 
//chrome has integer value, 
//while node has object value

