let x = {
    name: 'John',
    age: 25,    
    level: 3
};
console.log(x.name); // John

//updating
x.name = 'Jane';
console.log(x.name); // Jane

//add new property
x.country = 'USA';
console.log(x.country); // USA

//delete property
delete x.country;
console.log(x.country); // undefined