interface Person {
    name: string;
    age: number;
}

const sayHappyBirthday = (person: Person): string => {
    return `Hey ${person.name}, congrats on turning ${person.age}!`;
}

const person: Person = {name: "Tutku", age: 33};
console.log(sayHappyBirthday(person));