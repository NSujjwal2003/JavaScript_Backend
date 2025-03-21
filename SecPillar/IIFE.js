function x(){
    console.log("wow");
}

(function x(y){
    console.log("hi",y);
})("sanket");

x();
// this wont cause problem so iifi is used to prevent the function from overriding in large codebase
//IIFE PREVENT FUNCTION FROM OGVERRIDING IN LARGE CODEBASE>>>