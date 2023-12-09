let age: number | string | boolean = 21;
age = "23";
age = true;

type Point = {
    x: number;
    y: number
};

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc =  {x: 1, y:35};
coordinates = {lat: 321.123, long: 23.123};

function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

printAge(34);
printAge("25");

function calculateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        return parseFloat(price.replace("$", ""))
    } else {
        return price * tax;
    }
}