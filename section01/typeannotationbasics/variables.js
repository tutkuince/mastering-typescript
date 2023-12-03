// Strings
var movieTitle = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9; Type number is not assignable to type string
movieTitle.toUpperCase();
// Numbers
var numCatLives = 9;
numCatLives += 1;
// numCatLives = "zero"; Type string is not assignable to type number
// Boolean
var gameOver = false;
gameOver = true;
// gameOver = "true"; Type string is not assignable to type boolean
// Type Inference
//
//
var tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false; Type boolean is not assignable to type string
var isFunny = false;
isFunny = true;
// isFunny = "asd"; Type string is not assignable to type boolean
// any type
//
//
var thing = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();
