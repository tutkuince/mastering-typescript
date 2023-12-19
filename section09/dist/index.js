"use strict";
// class Player {
//     private readonly first: string; // public by default
//     private readonly last: string;  // we can use "readonly #first". It is the same thing.
//     public score: number = 0;
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//
//     }
//
//     private privateMethod(): void {
//         console.log("This is a private method, only accessible in Player class.");
//     }
// }
class Player {
    // private readonly first: string; // public by default
    // private readonly last: string;  // we can use "readonly #first". It is the same thing.
    // public score: number = 0;
    constructor(first, last, _score, nickname) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.nickname = nickname;
    } // shortcut
    privateMethod() {
        console.log("This is a private method, only accessible in Player class.");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    changeNickname() {
        this.nickname = "Admin";
    }
}
const barney = new Player("Barney", "Stinson", 100, "Westside");
// barney.last = "tot"; => Attempt to assign to const or readonly variable
// barney.first = "Tot"; => Property first is private and only accessible within class Player
barney.score = 150;
console.log(barney.score);
console.log(barney.fullName);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("Red");
const jacket1 = new Jacket("Prada", "Black");
