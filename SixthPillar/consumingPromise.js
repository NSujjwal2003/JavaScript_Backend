function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function createpromisewithtimeout(){
    return new Promise(function executor(resolve,reject){
        console.log("entering the executor callback in promise constructor");
        setTimeout(function(){
            let num=getRandomInt(10);
            if(num%2==0){
                resolve(num);
            }else{
                reject(num);
            }
        },10000);
        console.log("exiting the executor callback in the promise constructor");
    });
}

console.log("starting..."); 
const p = createpromisewithtimeout();
console.log("we are now waiting for the promise to be resolved or rejected");
console.log("currently my promise object is like this: ",p);

p.then(function(value){
    console.log("resolved with value: ",value);
    console.log("promise object after resolved: ",p);
}).catch(function(value){
    console.log("rejected with value: ",value);
    console.log("promise object after rejected: ",p);
});


