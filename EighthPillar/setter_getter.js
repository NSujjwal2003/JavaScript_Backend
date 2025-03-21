class Product{
    #name;

    constructor(n,p,d){
        this.#name=n;
        this.price=p;
        this.description=d;
    }

    setName(n){
        if(typeof n != "string"){
            console.log("name should be string");
            return;
        }
        this.#name=n;
    }

    getName(){
        return this.#name;
    }

    display(){
        console.log(this.#name,this.price,this.description);
    }
}

const p1=new Product("bag",100,"cool bag");
p1.setName("iphone");
console.log(p1);
p1.display();
console.log(p1.getName());

//those pvt properties which we want to access from outside, we can use setter and getter


//better way to write setter and getter

class Product{
    #name;

    constructor(n,p,d){
        this.#name=n;
        this.price=p;
        this.description=d;
    }
    set Name(n){
        if(typeof(n)!='string'){
            console.log("invalid");
            return;
        }
        this.#name=n;
        return;
    }

    get Name(){
        return this.#name;
    }

    display(){
        console.log((this.#name,this.price,this.description));
    }
}

const p2 = new Product("bag",100,"cool bag");
p2.Name="iphone";
console.log(p2);
p2.display();
console.log(p2.Name);