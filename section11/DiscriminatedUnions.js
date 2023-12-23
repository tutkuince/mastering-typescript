// Discriminated Unions
var getFarmAnimalSound = function (animal) {
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
            var _exhaustiveCheck = animal; // we should never make it here, if we handled all cases correctly
            return _exhaustiveCheck;
    }
};
var stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster" // if we don't add kind property to Roster type, that could be an issue. Property kind is missing in type
};
getFarmAnimalSound(stevie);
