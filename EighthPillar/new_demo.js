class Product {
    //name; 
    //price;
    //desc;

    constructor(n, p, d){
        this.name = n;
        this.price = p;
        this.desc = d;


        //return "10"; //primitive : no effect
        //return {x : 10}; //will return it
        //return this; //if u dont return anything, it is equal to saying return this
    }

    display(){
        
    }
}

const p = new Product("bag", 1000, "black");
console.log(p);p