"use strict";
const sayHappyBirthday = (person) => {
    return `Hey ${person.name}, congrats on turning ${person.age}!`;
};
const person = { name: "Tutku", age: 33 };
console.log(sayHappyBirthday(person));
const pt = { id: 123321, x: 123, y: 321 };
// pt.id = 123; Cannot assign to id because it is a read-only property.
