import axios from "axios";

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string
    }
}

// axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => {
//         printUser(response.data);
//     }).catch(error => {
//     console.log("ERROR!", error);
// });

axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        response.data.forEach(printUser);
    }).catch(error => {
    console.log("ERROR!", error);
});

const printUser = (user: User): void => {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log("----------------------");
}