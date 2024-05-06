"use strict";
// Question:Node.23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// demo code 
let car = 'subaru';
let food = "pasta";
let number = 1000;
let laptop = 'HP';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//test no: 2
console.log("Is car === 'BMW'? I predict False.");
console.log(car === 'subaru');
//test no: 3
console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'subaru');
//test no: 4
console.log("Is food === 'Macroni'? I predict true.");
console.log(food === 'Pasta');
//test no: 5
console.log("Is number > '5000'? I predict False.");
console.log(number == 1000);
//test no: 6
console.log("Is laptop !== 'Dell'? I predict true.");
console.log(laptop === 'HP');
//test no: 7
console.log("is car.lenght > 0? I predict true");
console.log(car.length > 0);
//test no: 8
console.log("is car lenght > 10? I predict true");
console.log(car.length > 10);
//test no: 9
console.log("is car lenght < 10? I predict true");
console.log(car.length < 10);
//test no: 10
console.log("is car toUpperCase() === 'SABARU' ? i PREDICT TRUE");
console.log(car.toUpperCase() === 'SABARU');
//test no: 11
console.log("is car toLowerCase() === 'subaru' ? i PREDICT false");
console.log(car.toLowerCase() === 'subaru');
//test no: 12
console.log("is car.includes('u')?  i Predict true");
console.log(car.includes('u'));
// startwith('su')
// startwith('bu')
