// Discriminated Unions

interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster";
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}

interface Sheep {
    name: string;
    weight: number;
    age: number;
    kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

const getFarmAnimalSound = (animal: FarmAnimal) => {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Mooo!";
        case "rooster":
            return "Cockadoodledoo!";
        case "sheep":
            return "Baaa!";
        default:
            const _exhaustiveCheck: never = animal; // we should never make it here, if we handled all cases correctly
            return _exhaustiveCheck;
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster" // if we don't add kind property to Roster type, that could be an issue. Property kind is missing in type
};

getFarmAnimalSound(stevie);