let obj = {}; 

console.log(obj.toString()); // [object Object]
//this is the default implementation of toString() method in Object.prototype
//its type is string

//to handle this we can override the toString() method
let obj1 = {
    toString(){
        return "I am an object";
    }
};

console.log(obj1.toString()); // I am an object