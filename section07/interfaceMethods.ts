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