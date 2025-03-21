let product = {
    arr : [
        {
            name: "iPhone 12",
            price: 79999,
            desc: "6.1-inch display",
            rating: 4.5,
        
            getCategory: function print(){
                console.log(this.category);
            }
        },
        {
            name: "macbook pro",
            price: 122000,
            desc: "15-inch display",
            rating: 4.2,
        
            getCategory: function print(){
                console.log(this.category);
            }
        }
    ],
    category: "Electronics",
}

product.arr[0].getCategory();

//this gives undefined 
//as 
//product k andar arr k andar 0th index k andar getCategory function hai
//getCategory main hm this.category print kr rhe hain
//lekin category naam ka koi property nhi hai isliye undefined aayega