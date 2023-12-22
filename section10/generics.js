// function numberIdentity(item: number): number {
//     return item;
// }
//
// function stringIdentity(item: string): string {
//     return item;
// }
//
// function booleanIdentity(item: boolean): boolean {
//     return item;
// }
//
// function identity(item: any): any {
//     return item;
// }
function identity(item) {
    return item;
}
var arrowIdentity = function (item) {
    return item;
};
var resultStr = identity("str");
var resultBoolean = arrowIdentity(true);
console.log(resultStr);
console.log(resultBoolean);
var getRandomElement = function (items) {
    return items[Math.floor(Math.random() * items.length)];
};
var booleanArray = [true, false, true];
var resultForBoolean = getRandomElement(booleanArray);
console.log(resultForBoolean);
var numberArray = [4, 5, 6, 7];
var resultForNumber = getRandomElement(numberArray);
console.log(resultForNumber);
var catArray = [{ name: "Coco", breed: "Ragdoll" }, { name: "Kaju", breed: "Birman" }];
var resultForCat = getRandomElement(catArray);
console.log(resultForCat);
