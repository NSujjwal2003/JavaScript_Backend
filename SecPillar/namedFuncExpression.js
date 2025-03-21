const a  = function fun (){
    console.log("Hello");
}
a();
// This will print Hello as the function is named and is accessible inside the function
fun();
// This will give error as the function is named and is not accessible outside the function
//here the func is not accessible outside const a as it is block scoped