interface Dog {
    name: string;
    age: number;
    breed: string;
    bark(): string;
}

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark(): string {
        return "bark!";
    },
    job: "drug sniffer"
}

interface Person {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string
}

enum Levels {
    ENTRY_LEVEL = "Entry Level",
    JUNIOR = "Junior",
    MID_LEVEL = "Mid Level",
    SENIOR = "Senior"
}

interface Engineer extends Person, Employee {
    level: Levels,
    languages: Array<string>
}

const pierre: Engineer = {
    name: "Pierre",
    id: 123123,
    email: "pierre@mail.com",
    level: Levels.JUNIOR,
    languages: ["JS", "Java"]
}
console.log(pierre);