"use strict";
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
// twoFer() => "One for you, one for me"
// twoFer("Tutku") => "One for Tutku, one for me"
const twoFer = (name = "you") => {
    return `One for ${name}, one for me`;
};
console.log(twoFer());
console.log(twoFer("Tutku"));
// Write a isLeapYear() function that accepts a year and returns true/false depending on if the year is a leap year.
// isLeapYear(2012)
// isLeapYear(2013)
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
