// function getRandomElement(items: Array<T>): T {
//     return items[Math.floor(Math.random() * items.length)];
// }

// we need to add comma after generic 'T' => <T,>
const getRandomElement = <T,>(items: Array<T>): T => {
    return items[Math.floor(Math.random() * items.length)];
}