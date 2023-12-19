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
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // private readonly first: string; // public by default
        // private readonly last: string;  // we can use "readonly #first". It is the same thing.
        this.score = 0;
    } // shortcut
    privateMethod() {
        console.log("This is a private method, only accessible in Player class.");
    }
}
const barney = new Player("Barney", "Stinson");
// barney.last = "tot"; => Attempt to assign to const or readonly variable
// barney.first = "Tot"; => Property first is private and only accessible within class Player
console.log(barney.score);
