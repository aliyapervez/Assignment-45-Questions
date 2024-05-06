"use strict";
//Question: no.29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["apple", "watermelon", "mango"];
if (favorite_fruits.includes("apple")) {
    console.log("I really like apples!");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("I really like watermelons!");
}
if (favorite_fruits.includes("mango")) {
    console.log("I really like mangoes!");
}
if (favorite_fruits.includes("pear")) {
    console.log("I really like pears!");
}
if (favorite_fruits.includes("peach")) {
    console.log("I really like peaches!");
}
