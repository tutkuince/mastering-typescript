class Player {
    readonly first: string;
    readonly last: string;
    score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const barney = new Player("Barney", "Stinson");
// barney.last = "tot"; => Attempt to assign to const or readonly variable 
console.log(barney.score);