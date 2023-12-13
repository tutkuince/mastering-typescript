interface Person {
    readonly id: number;
    name: string;
    age: number;
    nickname?: string;
    sayHi: () => string;
}

const tutku: Person = {
    name: "Tutku",
    age: 15,
    id: 123123,
    nickname: "ns",
    sayHi: () => "Hi"
}
console.log(tutku);

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number): number {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return newPrice;
    }
}

console.log(shoes.applyDiscount(0.4));


interface Dog {
    name: string;
    age: number;
}

// reopening interface
interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark(): string {
        return "WOOF WOOF!";
    }
}