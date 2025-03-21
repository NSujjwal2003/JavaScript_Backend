class Product{
    #name;

    constructor(n,p,d){
        this.#name=n;
        this.price=p;
        this.description=d;
    }

    display(){
        console.log(this.#name,this.price,this.description);
    }
}

const p=new Product("bag",100,"cool bag");
p.name="iphone"; //will add new property to object but out original property is still private
console.log(p);
p.display();

//but if we want to change the value of private property, we can use setter and getter