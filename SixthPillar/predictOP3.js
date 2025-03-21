console.log("start of file");

setTimeout(function timer1(){
    console.log("timer 1 done");
},0);

for(let i=0;i<1000000000;i++){}

let x=Promise.resolve("sanket promise1");

x.then(function processpromise(value){
    console.log("whose promise",value);
});

setTimeout(function timer2(){
    console.log("timer2 done");
},0);

console.log("end of the file");