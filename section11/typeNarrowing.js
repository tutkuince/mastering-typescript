var isTeenager = function (age) {
    if (typeof age === "string") {
        console.log(age.startsWith("1"));
    }
    if (typeof age === "number") {
        console.log(age > 12 && age < 20);
    }
};
var printLetters = function (word) {
    if (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            console.log(char);
        }
    }
    else {
        console.log("No word was provided.");
    }
};
// EQUALITY NARROWING
var someFunc = function (x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
};
var talk = function (creature) {
    if ("meow" in creature) {
        console.log(creature.meow);
    }
    else {
        console.log(creature.bark);
    }
};
