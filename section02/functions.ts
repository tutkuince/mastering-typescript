function square(num: number) {
    return num * num;
}
// function greet(person: string) : string {
//     return `Hi there, ${person}!`
// }
const doSomething = (person: string, age: number, isFunny: boolean) => {}

function greet(person: string = "stranger") : string {
    return `Hi there, ${person}!`
}

console.log(greet("Tutku"));
console.log(greet());

const addNumbers = (x: number, y: number): number => {
    return x + y;
}

console.log(addNumbers(10, 20));
const result = (num: number): number | string => {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
console.log(result(10));

const colors = ["red", "orange", "yellow"];
const colorResult: string[] = colors.map((color: string) => {
   return color.toUpperCase();
});
console.log(colorResult);

const printTwice = (msg: string = "No message value"): void => {
    console.log(msg);
    console.log(msg);
}
printTwice("King");

const makeError = (msg: string): never => {
    throw new Error(msg);
}