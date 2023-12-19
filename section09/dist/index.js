"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
}
const barney = new Player("Barney", "Stinson");
console.log(barney.score);
