/*
filter function
filter is also HOf
theres an speacial thing about filter, the argumnent f which we have to pass inside 
filter function should return a boolean value

filter loops over over every element, passes that element in the argument function and then if the output
of this function is true, then that element is stored in the new array
*/

function oodOrEven(x){
    return x%2 === 0;
}                    

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.filter(oodOrEven));