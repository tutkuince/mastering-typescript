abstract class Employee {
    constructor(
        public first: string,
        public last: string) {
    }

    abstract getPay(): number;

    greet() {
        console.log("Hello");
    }
}

class FullTimeEmployee extends Employee {
    constructor(
        public first: string,
        public last: string,
        private _salary: number
    ) {
        super(first, last);
    }

    getPay(): number {
        return this._salary;
    }
}

class PartTimeEmployee extends Employee {

    constructor(
        public first: string,
        public last: string,
        private _hourlyRate: number,
        private _hoursWorked: number) {
        super(first, last);
    }

    getPay(): number {
        return this._hourlyRate * this._hoursWorked;
    }
}

const tutku = new FullTimeEmployee("Tutku", "Ince", 95000);
console.log(tutku.getPay());

const ciko = new PartTimeEmployee("Ciko", "Ince", 10, 6);
console.log(ciko.getPay());