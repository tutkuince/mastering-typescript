export default class User {
    constructor(public username: string, public email: string) {
    }
    logout() {
        console.log(`${this.username} logs out`);
    }
}