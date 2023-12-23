// Discriminated Unions
var getFarmAnimalSound = function (animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Mooo!";
        case "rooster":
            return "Cockadoodledoo!";
    }
};
var stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster" // if we don't add kind property to Roster type, that could be an issue. Property kind is missing in type
};
getFarmAnimalSound(stevie);
