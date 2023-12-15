"use strict";
// Create a variable called highScore that can be number or a boolean
let highScore;
highScore = 1;
highScore = true;
// Create an array called stuff
// it can be an array of numbers or an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuff;
stuff = [1, 4, 2, 3];
stuff = ["asd", "asd"];
let level = "Expert";
let student = {
    name: "Tutku",
    age: 30,
    sport: "snowboard",
    level: "Intermediate"
};
console.log(student);
// Create an array called colors that can hold a mixture of RGB and HSL color types
let colors;
colors = [{ r: 1, g: 2, b: 1 }, { h: 12, s: 123, l: 213 }];
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person or greet each person in the array with the same format.
const greet = (person) => {
    if (typeof person === "string") {
        console.log(`Hello, ${person}`);
    }
    else {
        person.forEach(p => {
            console.log(`Hello, ${person}`);
        });
    }
};
