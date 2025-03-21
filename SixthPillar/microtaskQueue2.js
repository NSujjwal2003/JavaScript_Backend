function createpromise(){
    return new Promise(function exec(resolve,reject){
         setTimeout(function(){
            console.log("rejecting the promise");
            reject("done");
         },1000);
    });
}

let p=createpromise();
p.then(function fulfilhandler1(value){
    console.log("we fulfilled with a value ",value);
},function rejectionHandler(value){
    console.log("we reject with a value",value);
});

p.then(function fulfilhandler1(value){
    console.log("we fulfilled with a value ",value);
},function rejectionHandler(value){
    console.log("we reject with a value",value);
});


console.log("ending");