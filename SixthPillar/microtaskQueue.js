function createpromise(){
    return new Promise(function exec(resolve,reject){
            console.log("rejecting the promise");
            reject("done");
        });
};

let p=createpromise();
p.then(function fulfilhandler1(value){1
    console.log("we fulfilled with a value ",value);
},function rejectionHandler(value){
    console.log("we reject with a value",value);
});

p.then(function fulfilhandler1(value){
    console.log("we fulfilled with a value ",value);
},function rejectionHandler(value){
    console.log("we reject with a value",value);
});

for(let i=0;i<10000000000;i++) {}

console.log("ending");
