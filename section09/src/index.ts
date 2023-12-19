class Player {
    first: string;
    last: string;
    score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const barney = new Player("Barney", "Stinson");
console.log(barney.score);