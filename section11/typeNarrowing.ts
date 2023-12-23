const isTeenager = (age: number | string) => {
    if (typeof age === "string") {
        console.log(age.startsWith("1"));
    }
    if (typeof age === "number") {
        console.log(age > 12 && age < 20);
    }
}

const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    } else {
        console.log("No word was provided.");
    }
}