"use strict";
//generic func
function getFirstElement(items) {
    return items[0];
}
//generic class
class DataManager {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
//user data manager model
const userManager = new DataManager();
userManager.add({ id: 2, name: "yogi" });
userManager.add({ id: 3, name: "Sravs" });
//product data manager model
const productManager = new DataManager();
productManager.add({ id: 5, title: "Mobile" });
productManager.add({ id: 9, title: "Laptop" });
console.log("----users-----");
console.log(userManager.getAll());
console.log("----products-----");
console.log(productManager.getAll());
console.log("----first user------");
console.log(getFirstElement(userManager.getAll()));
console.log("----first product------");
console.log(getFirstElement(productManager.getAll()));
