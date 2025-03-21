const arr = [1,3,8,9,4];

function g(element, idx){
    return `element at index ${idx} is ${element}`;
}

console.log(arr.map(g));

//if the function  that we are passing in the map takes two arguments 
//then the first argumnent will be accessing the original value 
//second argument will be accessing the index of the that value

