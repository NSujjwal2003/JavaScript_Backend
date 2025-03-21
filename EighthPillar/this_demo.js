let iphone = {
    name: "iPhone 12",
    price: 79999,
    desc: "6.1-inch display",
    rating: 4.5,

    display: function(){
        console.log("first display", this);
    }
}


let macBook = {
    name: "macbook pro",
    price: 122000,
    desc: "15-inch display",
    rating: 4.2,

    display: function(){
        console.log("second display", this);
    }
}

iphone.display();
macBook.display();

console.log(this);