type Point = {
    x: number;
    y: number;
    z?: number; // ? means is optional
}

const myPoint: Point = {x: 1, y: 2}; // z is optional not mandatory.

type User = {
    readonly id: number;
    username: string
};

const user: User = {
    id: 123123,
    username: "user1"
}
console.log(user);
console.log(user.id);
// user.id = 123123; Cannot assign to id because it is a read-only property.