//map fuction
//map is a hof available in array
//it takes a function as an argument ->f
//it returns an array in which each element is actually populated by calling
//fuction f with original array element as an argument


//every element of the array is passed one by one to the argument function f
//whatever is the output for each individual element, we populate that output in an array

//map intentionally iterates over the array, pass that element in the argument function f and then store the returned 
//value in the new array

function square(x){
    return x*x;
}

function evenOdd(x){
    if(x%2 === 0){
        return "even";
    }
    else{
        return "odd";
    }
}

const arr = [1,2,3,4,5];

arr.map(square);
//here map is a higher order function, it takes sqaure function as an argument

console.log(arr.map(evenOdd));


