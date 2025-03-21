// var teacher = "Kyle";
// function fun(){
//     var teacher = "Suzy";
//     console.log(teacher);
// }
// function gun(){
//     var student = "Frank";
//     console.log(teacher);
// }

// fun();
// gun();
//console.log(teacher);

// This will print Suzy, Kyle and kyle as the teacher variable is defined inside the function fun and gun and is accessible inside the function

var teacher = "Kyle";
function fun(){
    var teacher = "Suzy";
    content = "Hello";
    console.log(teacher);
}
function gun(){
    var student = "Frank";
    console.log(teacher);
}

// fun();
// gun();
// console.log(teacher);
// console.log(content);

// when fun is called it resolves itself, since content is not specified by let/var so it than gives assisgns content as autoGlobal
// This will print Suzy, Kyle, Kyle and Hello as the teacher variable is defined inside the function fun and gun and is accessible inside the function and content is defined without using var so it is a global variable and is accessible anywhere in the code


console.log(content);
fun();
gun();
console.log(teacher);

//this will give error from content as when excution starts, it has no idea where content is so it gives error
