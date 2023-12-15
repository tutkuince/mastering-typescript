"use strict";
let age = 21;
age = "23";
age = true;
let coordinates = { x: 1, y: 35 };
coordinates = { lat: 321.123, long: 23.123 };
function printAge(age) {
    console.log(`You are ${age} years old`);
}
printAge(34);
printAge("25");
function calculateTax(price, tax) {
    if (typeof price === "string") {
        return parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
calculateTax(24, .34);
const stuff = [1, 2, 3, "asd"];
const coords = [];
coords.push({ lat: 312.123, long: 213.22 });
coords.push({ x: 123, y: 231 });
console.log(coords);
