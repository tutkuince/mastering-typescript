import type {Person} from "./types";

export default class User {
    constructor(public username: string, public email: string) {
    }
    logout() {
        console.log(`${this.username} logs out`);
    }
}

export const userHelper = (): void => {
    console.log("User helper");
}