let x = {
    name: 'John',
    age: 25,    
    level: 3,
    a: 10,
    b: 20,
    company: 'Google',
    city: 'Bangalore'
};

let keysOfX = Object.keys(x); // returns an array of keys of the object
console.log(keysOfX); 

let valuesOfX = Object.values(x); // returns an array of values of the object
console.log(valuesOfX);

let entriesOfX = Object.entries(x); // returns an array of key-value pairs of the object
console.log(entriesOfX);