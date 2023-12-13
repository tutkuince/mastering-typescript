var tutku = {
    name: "Tutku",
    age: 15,
    id: 123123,
    nickname: "ns",
    sayHi: function () { return "Hi"; }
};
console.log(tutku);
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return newPrice;
    }
};
console.log(shoes.applyDiscount(0.4));
