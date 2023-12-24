export const add = (x, y) => {
    return x + y;
};
export const sample = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};
