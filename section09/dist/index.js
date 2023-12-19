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
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
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
const barney = new Player("Barney", "Stinson", 100);
// barney.last = "tot"; => Attempt to assign to const or readonly variable
// barney.first = "Tot"; => Property first is private and only accessible within class Player
barney.score = 150;
console.log(barney.score);
console.log(barney.fullName);
