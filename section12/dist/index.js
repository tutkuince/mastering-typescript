"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => {
//         printUser(response.data);
//     }).catch(error => {
//     console.log("ERROR!", error);
// });
axios_1.default.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
    response.data.forEach(printUser);
}).catch(error => {
    console.log("ERROR!", error);
});
const printUser = (user) => {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log("----------------------");
};
