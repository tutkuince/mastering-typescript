const printName = (person: {first: string, last: string}): void => {
    console.log(`Hello ${person.first} ${person.last}`);
}

printName({first: "Tutku", last: "Ince"});

let coordinate: {x: number, y: number} = {x: 34, y:42};
console.log(coordinate);


const randomCoordinate = (): {x: number, y: number} => {
    return {x: Math.random(), y: Math.random()};
}

console.log(randomCoordinate());