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