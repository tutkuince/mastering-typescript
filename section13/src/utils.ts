export const add = (x: number, y: number): number => {
    return x + y;
}

export const sample = <T>(arr: Array<T>): T => {
    const index: number = Math.floor(Math.random() * arr.length);
    return arr[index];
}