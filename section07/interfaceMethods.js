"use strict";
const tutku = {
    name: "Tutku",
    age: 15,
    id: 123123,
    nickname: "ns",
    sayHi: () => "Hi"
};
console.log(tutku);
const shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return newPrice;
    }
};
console.log(shoes.applyDiscount(0.4));
const elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "WOOF WOOF!";
    }
};
