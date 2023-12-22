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