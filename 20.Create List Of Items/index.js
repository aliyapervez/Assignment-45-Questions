"use strict";
//Question:No.20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
//define array of names
let mountains = ["Everest", "KaraKoram", "Denali", "Mount Elbrus"];
console.log("List of mountains ", mountains.forEach(mountain => {
    console.log(mountain);
}));
let rivers = ["Amazon", "Indus", "Nile", "Congo", "Mekong"];
console.log("List of rivers", rivers.forEach(river => {
    console.log(river);
}));
let countries = ["Nepal", "Pakistan", "China", "USA", "Palestine"];
console.log("List of countries", countries.forEach(country => {
    console.log(country);
}));
let cities = ["Karachi", "Islamabad", "Lahore", "London", "Tokyo"];
console.log("List of cities", cities.forEach(city => {
    console.log(city);
}));
let languages = ["English", "Hindi", "Urdu", "Spanish", "French"];
console.log("List of languages", languages.forEach(language => {
    console.log(language);
}));
let foods = ["Biryani", "Pasta", "Chiken Karahi", "Mughlai Tikka"];
console.log("List of food", foods.forEach(food => {
    console.log(food);
}));
