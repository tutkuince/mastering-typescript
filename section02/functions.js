"use strict";
function square(num) {
    return num * num;
}
// function greet(person: string) : string {
//     return `Hi there, ${person}!`
// }
const doSomething = (person, age, isFunny) => { };
function greet(person = "stranger") {
    return `Hi there, ${person}!`;
}
console.log(greet("Tutku"));
console.log(greet());
const addNumbers = (x, y) => {
    return x + y;
};
console.log(addNumbers(10, 20));
const result = (num) => {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
};
console.log(result(10));
const colors = ["red", "orange", "yellow"];
const colorResult = colors.map((color) => {
    return color.toUpperCase();
});
console.log(colorResult);
const printTwice = (msg = "No message value") => {
    console.log(msg);
    console.log(msg);
};
printTwice("King");
const makeError = (msg) => {
    throw new Error(msg);
};
