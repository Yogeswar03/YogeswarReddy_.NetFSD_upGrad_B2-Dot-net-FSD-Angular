//generic func

function getFirstElement<T>(items: T[]): T{
    return items[0];
}

//  generic interface

interface Repository<T>{
    add(items:T):void;
    getAll():T[];
}

//generic class

class DataManager<T>implements Repository<T>{
    private items:T[] = [];

    add(item:T){
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

//models 

interface User{
    id:number;
    name:string;
}

interface Product{
    id:number;
    title:string;
}

//user data manager model
const userManager = new DataManager<User>();

userManager.add({id: 2, name :"yogi"});
userManager.add({id:3 ,name:"Sravs"});

//product data manager model
const productManager = new DataManager<Product>();

productManager.add({id: 5, title:"Mobile"});
productManager.add({id:9,title:"Laptop"});

console.log("----users-----");
console.log(userManager.getAll());


console.log("----products-----");
console.log(productManager.getAll());

console.log("----first user------");
console.log(getFirstElement(userManager.getAll()));

console.log("----first product------");
console.log(getFirstElement(productManager.getAll()));





