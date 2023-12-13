var sayHappyBirthday = function (person) {
    return "Hey ".concat(person.name, ", congrats on turning ").concat(person.age, "!");
};
var person = { name: "Tutku", age: 33 };
console.log(sayHappyBirthday(person));
