// Strings
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9; Type number is not assignable to type string
movieTitle.toUpperCase();

// Numbers
let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero"; Type string is not assignable to type number

// Boolean
let gameOver : boolean = false;
gameOver = true;
// gameOver = "true"; Type string is not assignable to type boolean

// Type Inference
//
//
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false; Type boolean is not assignable to type string

let isFunny = false;
isFunny = true;
// isFunny = "asd"; Type string is not assignable to type boolean


// any type
//
//
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();


const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
