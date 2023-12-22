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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
console.log("-----------------------------------------");
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
var resultForCat2 = getRandomElement(catArray);
console.log(resultForCat);
console.log(resultForCat2);
console.log("-----------------------------------------");
var merge = function (object1, object2) {
    return __assign(__assign({}, object1), object2);
};
var comboObj = merge({ name: "Tutku" }, { pets: ["coco", "kaju"] });
console.log(comboObj);
