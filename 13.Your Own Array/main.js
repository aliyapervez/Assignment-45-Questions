"use strict";
//Question No:13
//Your Own Array: 
//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
//defines an array of transportation 
let transportationMode = ["Car", "Helicopter", "Plane", "Honda Civic", "Bus"];
//loop
//for each
//for of loop
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
}
transportationMode.forEach(mode => {
    console.log(`I would like to own a ${mode}`);
});
for (const mode of transportationMode) {
    console.log(`I would like to own a ${mode}`);
}
