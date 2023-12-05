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

greet("Tutku");
greet();