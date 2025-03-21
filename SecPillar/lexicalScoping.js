var teacher="sanket";
function ask(question){
    console.log(teacher,question);
}
function fun(){
    var teacher='pulkit';
    ask("why");
}
fun();

//this will print sanket why as the teacher variable is defined inside the function fun and is accessible inside the function
// but has it been dynamic scoping, it would have printed pulkit why as the teacher variable would have been searched in the function fun and then in the function ask