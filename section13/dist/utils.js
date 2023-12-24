"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = exports.add = void 0;
const add = (x, y) => {
    return x + y;
};
exports.add = add;
const sample = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};
exports.sample = sample;
