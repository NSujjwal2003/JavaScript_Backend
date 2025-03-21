//task (dont use promise only use callback)

//task 1: write a func to download data from a url 
//task 2: ""    "" ""  to save that downloaded data in a file and return the filename 
//task 3: write a function the upload the file written in previous step to a new URL
 

function downloadData(url,cb){
    console.log("started downloading content from",url);
    setTimeout(function p(){
        console.log("completed downloading data in 5s");
        const content="abcdef";
        cb(content);
    },5000);
}

function writeFile(data, cb){
    //writes the given data in a new file
    console.log("started writing file", data);
    setTimeout(function write(){
        console.log("completed writing data in file");
        const filename="dummy.txt";
        cb(filename);
    }, 5000); 
}

function upload(url, file, cb){
    //uploads the data from a file to a given url
    console.log("started uploading", file,  "on", url);

    setTimeout(function up(){
        console.log("upload successful");
        const response="SUCCESS";
        cb(response);
    }, 3000); 
}

downloadData("www.xyz.com", function(data){
    console.log("we are now going to process the downloaded data");
    writeFile(data, function(file){
        console.log("we have downloaded and written the file, now will upload"); 
        upload("www.abc.com", file, function(response){
            console.log("response is", response);
        });
    });
});