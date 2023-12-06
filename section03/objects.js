var printName = function (person) {
    console.log("Hello ".concat(person.first, " ").concat(person.last));
};
printName({ first: "Tutku", last: "Ince" });
var coordinate = { x: 34, y: 42 };
console.log(coordinate);
var randomCoordinate = function () {
    return { x: Math.random(), y: Math.random() };
};
console.log(randomCoordinate());
