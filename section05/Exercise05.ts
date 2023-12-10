// Create a variable called highScore that can be number or a boolean
let highScore: number | boolean;

// Create an array called stuff
// it can be an array of numbers or an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuff: Array<number> | Array<string>;
stuff = [1, 4, 2, 3];
stuff = ["asd", "asd"];
// stuff = [1, 2, "asd"];

// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
let level: SkillLevel = "Expert";

// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type
type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "ski" | "snowboard";
    level: SkillLevel
}

let student: SkiSchoolStudent = {
    name: "Tutku",
    age: 30,
    sport: "snowboard",
    level: "Intermediate"
};
console.log(student);

// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number
type RGB = {
    r: number;
    g: number;
    b: number;
}

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number
type HSL = {
    h: number;
    s: number;
    l: number;
}

// Create an array called colors that can hold a mixture of RGB and HSL color types
let colors: (RGB | HSL);
colors = [{r: 1, g: 2, b: 1}, { h: 12, s: 123, l: 213}];


// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person or greet each person in the array with the same format.