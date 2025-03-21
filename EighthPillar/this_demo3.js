const iphone = {
    name: "iPhone 12",
    price: 79999,
    desc: "6.1-inch display",
    rating: 4.5,

    display: function(){
        console.log("first display", this);
    }
}

const macBook = {
    name: "macbook pro",
    price: 122000,
    desc: "15-inch display",
    rating: 4.2,

    display: () => {
        console.log("second display", this);
    }
}

iphone.display();
macBook.display();

//first main display function call hua
//this main iphone object aaya
//second main display function call hua
//this main window object aaya
//window object is the global object in the browser

//inshort jab hm arrow func use krte h, to uss case main
//hmra output window object aata h {}
//jabki normal function main hmara output object aata h


//with arrow function, this does not refer to the calling context
//baaki har case main this refers to the calling context