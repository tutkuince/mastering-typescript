"use strict";
// Create an empty array of numbers called "ages"
const ages = [];
// Create an array variable called gameBoard that starts as an empty array
// It should be typed to hold a 2-dimensional array of strings
const gameBoard = [];
const products = [];
products.push({ name: "coffee mug", price: 11.30 });
products.push({ name: "coffee", price: 5.30 });
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = (products) => {
    let total = 0;
    products.forEach(product => {
        total += product.price;
    });
    return total;
};
console.log(getTotal(products));
