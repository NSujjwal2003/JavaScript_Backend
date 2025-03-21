let obj = {x : 10}; 
console.log(obj.valueOf()); // { x: 10 }
//valueOf() method returns the primitive value of the specified object
//if the object has no primitive value, it returns the object itself

//to handle this we can override the valueOf() method

let obj1 = {
    valueOf(){
        return 10;
    }
};
console.log(obj1.valueOf()); // 10