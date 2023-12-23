const isTeenager = (age: number | string) => {
    if (typeof age === "string") {
        console.log(age.startsWith("1"));
    }
    if (typeof age === "number") {
        console.log(age > 12 && age < 20);
    }
}

const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    } else {
        console.log("No word was provided.");
    }
}

// EQUALITY NARROWING
const someFunc = (x: string | boolean, y: string | number) => {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    } else {
        console.log(x);
        console.log(y);
    }
}


type Cat = { meow: () => void };
type Dog = { bark: () => void };
const talk = (creature: Cat | Dog) => {
    if ("meow" in creature) {
        console.log(creature.meow);
    } else {
        console.log(creature.bark);
    }
}

const printFullDate = (date: Date | string): Date | string => {
    if (date instanceof Date)
        return date.toUTCString();
    else
        return new Date(date).toUTCString();
}

interface Cat1 {
    name: string;
    numLives: number;
}
interface Dog1 {
    name: string;
    breed: string;
}

// animal is Cat1 => guarantees this is a cat or not
const isCat = (animal: Cat1 | Dog1): animal is Cat1 => {
    return (animal as Cat1).numLives !== undefined;
}

const makeNoise = (animal: Cat1 | Dog1): string => {
    if (isCat(animal)) {
        return "Meow!";
    }
    return "Woff!";
}