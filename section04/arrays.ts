const activeUsers: string[] = ["Tutku"];
activeUsers.push("Tutku");

const ageList: number[] = [45, 56, 13.5];
ageList[0] = 123;
console.log(ageList);

// An alternate syntax
let names: Array<string> = ["hello", "world"];
let ages: Array<number> = [23, 31, 18, 29];

type Point = {
    x: number;
    y: number;
}

const coords: Array<Point> = [];
coords.push({x: 23, y:18});
coords.push({x: 12, y:38});

// Multidimensional Arrays
const board: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
];