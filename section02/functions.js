function square(num) {
    return num * num;
}
// function greet(person: string) : string {
//     return `Hi there, ${person}!`
// }
var doSomething = function (person, age, isFunny) { };
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
console.log(greet("Tutku"));
console.log(greet());
var addNumbers = function (x, y) {
    return x + y;
};
console.log(addNumbers(10, 20));
var result = function (num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
};
console.log(result(10));
var colors = ["red", "orange", "yellow"];
var colorResult = colors.map(function (color) {
    return color.toUpperCase();
});
console.log(colorResult);
var printTwice = function (msg) {
    if (msg === void 0) { msg = "No message value"; }
    console.log(msg);
    console.log(msg);
};
printTwice("King");
