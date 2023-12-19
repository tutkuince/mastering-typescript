"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    privateMethod() {
        console.log("This is a private method, only accessible in Player class.");
    }
}
const barney = new Player("Barney", "Stinson");
// barney.last = "tot"; => Attempt to assign to const or readonly variable
// barney.first = "Tot"; => Property first is private and only accessible within class Player
console.log(barney.score);
