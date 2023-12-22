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

function identity<T>(item: T): T {
    return item;
}

const arrowIdentity = <T>(item: T): T => {
    return item;
}

const resultStr = identity<string>("str");
const resultBoolean = arrowIdentity<boolean>(true);

console.log(resultStr);
console.log(resultBoolean);

console.log("-----------------------------------------");
const getRandomElement = <T>(items: Array<T>): T => {
    return items[Math.floor(Math.random() * items.length)];
}

const booleanArray: boolean[] = [true, false, true];
const resultForBoolean = getRandomElement<boolean>(booleanArray);
console.log(resultForBoolean);

const numberArray: Array<number> = [4, 5, 6, 7];
const resultForNumber: number = getRandomElement<number>(numberArray);
console.log(resultForNumber);

interface Cat {
    name: string;
    breed: string;
}

const catArray: Array<Cat> = [{name: "Coco", breed: "Ragdoll"}, {name: "Kaju", breed: "Birman"}];
const resultForCat: Cat = getRandomElement<Cat>(catArray);
console.log(resultForCat);