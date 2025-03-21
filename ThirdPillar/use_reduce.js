function addPrice(prevResult, currValue){
    let newPrice = prevResult.price + currValue.price;
    return {price: newPrice};
}

let cart = [{
        price : 10000, 
        name  : 'Iphone'   
    }, 
    {
        price : 20000, 
        name  : 'Samsung' 
    }, 
    {
        price : 30000, 
        name  : 'OnePlus' 
    }
];

const totalPrice = cart.reduce(addPrice); 
console.log(totalPrice.price); 

//it is used in the case where we have to calculate the sum of the prices of the products in the cart