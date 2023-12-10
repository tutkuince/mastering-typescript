const giveAnswer = (answer: "yes" | "no" | "maybe"): string => {
    return `The answer is ${answer}`;
}
giveAnswer("no");
// giveAnswer("oh boy I'm not sure"); => Argument of type "oh boy I'm not sure" is not assignable to parameter of type "yes" | "no" | "maybe"

let mood: "Happy" | "Sad";
mood = "Happy";
// mood = "Angry";

type DayOfWeek =
    "Monday" |
    "Tuesday" |
    "Wednesday" |
    "Thursday" |
    "Friday" |
    "Saturday" |
    "Sunday";

let today: DayOfWeek = "Monday";