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
