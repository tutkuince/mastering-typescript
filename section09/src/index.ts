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
    constructor(
        public first: string,
        public last: string,
        private _score: number,
        protected nickname: string
        ) {} // shortcut

    private privateMethod(): void {
        console.log("This is a private method, only accessible in Player class.");
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}

class SuperPlayer extends Player {
    isAdmin: boolean = true;
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


