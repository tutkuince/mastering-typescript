interface Person {
    name: string;
    age: number;
}

const sayHappyBirthday = (person: Person): string => {
    return `Hey ${person.name}, congrats on turning ${person.age}!`;
}

const person: Person = {name: "Tutku", age: 33};
console.log(sayHappyBirthday(person));

interface Point {
    readonly id: number;
    x: number;
    y: number;
    z?: number;
}

const pt: Point = {id: 123321, x: 123, y: 321};
// pt.id = 123; Cannot assign to id because it is a read-only property.