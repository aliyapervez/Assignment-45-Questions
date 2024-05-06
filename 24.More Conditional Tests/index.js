//Question: no. 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//test no:1
// • Tests for equality and inequality with strings
var greet1 = "Hello World!";
var greet2 = "Hello World!";
console.log(greet1 === greet2); //true
console.log(greet1 !== greet2); //false
//test no:2
// • Tests using the lower case function
var upperCase = "HELLO WORLD!";
var lowerCase = "hello world!";
console.log(upperCase.toLowerCase() === lowerCase.toLowerCase()); //true
//test no:3
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 50;
var num2 = 100;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
//test no:4
// • Tests using "and" and "or" operators
var a = 20;
var b = 40;
var c = 60;
console.log(a < b && a < c); //true
console.log(a > b || a < c); //true
//test no:5
// • Test whether an item is in a array
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1); //true
//test no:6
// • Test whether an item is not in a array
console.log(array1.indexOf(itemToFind) === -1); //true
