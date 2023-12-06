const printName = (person: { first: string, last: string }): void => {
    console.log(`Hello ${person.first} ${person.last}`);
}

printName({first: "Tutku", last: "Ince"});

let coordinate: { x: number, y: number } = {x: 34, y: 42};
console.log(coordinate);


const randomCoordinate = (): { x: number, y: number } => {
    return {x: Math.random(), y: Math.random()};
}
console.log(randomCoordinate());

// printName({first: "Mauro", last: "Icardi", age: 30}); is not assignable to parameter of type { first: string; last: string; }
const player = {first: "Mauro", last: "Icardi", age: 30};
printName(player);

// const doublePoint = (point: { x: number, y: number }): { x: number, y: number } => {
//     return {x: point.x * 2, y: point.y * 2};
// }

type Point = {
    x: number;
    y: number;
}

const doublePoint = (point: Point): Point => {
    return {x: point.x * 2, y: point.y * 2};
}