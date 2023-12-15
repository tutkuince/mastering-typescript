"use strict";
const chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "bark!";
    },
    job: "drug sniffer"
};
var Levels;
(function (Levels) {
    Levels["ENTRY_LEVEL"] = "Entry Level";
    Levels["JUNIOR"] = "Junior";
    Levels["MID_LEVEL"] = "Mid Level";
    Levels["SENIOR"] = "Senior";
})(Levels || (Levels = {}));
const pierre = {
    name: "Pierre",
    id: 123123,
    email: "pierre@mail.com",
    level: Levels.JUNIOR,
    languages: ["JS", "Java"]
};
console.log(pierre);
