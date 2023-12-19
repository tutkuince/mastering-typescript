"use strict";
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, _salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this._salary = _salary;
    }
    getPay() {
        return this._salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, _hourlyRate, _hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this._hourlyRate = _hourlyRate;
        this._hoursWorked = _hoursWorked;
    }
    getPay() {
        return this._hourlyRate * this._hoursWorked;
    }
}
const tutku = new FullTimeEmployee("Tutku", "Ince", 95000);
console.log(tutku.getPay());
const ciko = new PartTimeEmployee("Ciko", "Ince", 10, 6);
console.log(ciko.getPay());
