"use strict";
var teacher = "Kyle";
function fun(){
    var teacher = "Suzy";
    content = "Hello";
    console.log(teacher);
}

fun(); 
console.log(teacher);
console.log(content);

//see the diff in output when we use strict mode and when we dont use strict mode