"use strict";
const giveAnswer = (answer) => {
    return `The answer is ${answer}`;
};
giveAnswer("no");
// giveAnswer("oh boy I'm not sure"); => Argument of type "oh boy I'm not sure" is not assignable to parameter of type "yes" | "no" | "maybe"
let mood;
mood = "Happy";
let today = "Monday";
