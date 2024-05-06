"use strict";
//Question:No.18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
let favPlaces = ["Turkey", "England", "Switzerland", "Abha", "Canada", "Malaysia"];
//print array in original order
console.log("Original Order", favPlaces);
// print array in alphabetical order without modify
console.log("Alphabetical Order:", favPlaces.slice().sort());
// print array in its original order
console.log(" Still In Original Order", favPlaces);
// print array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:", favPlaces.slice().sort().reverse());
// print array again in its original order
console.log(" Again Still In Original Order", favPlaces);
// Print the array in reserve order to show that its order has changed.
favPlaces.reverse();
console.log("Reverse Order", favPlaces);
// reverse the order of list again. Print the list to show it’s back to its original order.
favPlaces.reverse();
console.log("Back To Its Original Order", favPlaces);
// sort array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favPlaces.sort();
console.log("Alphabetical Order", favPlaces);
// sort to change array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
favPlaces.sort().reverse();
console.log("Reverse Alphabetical Order", favPlaces);
