let x = {
    name: 'John',
    age: 25,    
    level: 3,
    a: 10,
    b: 20,
    company: 'Google',
    city: 'Bangalore'
}

//for of loop
//loop over an object
for(const entry of Object.entries(x)){
    console.log(entry);
}

//for in loop
//loop over an keys of an object
for (const key in x){
    console.log(key);
}
