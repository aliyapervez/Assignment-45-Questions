"use strict";
//Question:No.16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest = ["Marium", "Fatima", "Hina", "Aliya"];
// print statement about informing of new table to guest
console.log(`Hurray!  We can have more people at dinner because i've found a bigger dining table `);
// add new guest in begining
//unshift
guest.unshift("Sanobar");
console.log(guest);
//add on new guest in middle  
//splice
guest.splice(Math.floor(guest.length / 2), 0, "Madiha");
//add on new guest using append or push    
guest.push("Kainaat");
console.log(guest);
guest.forEach(guestList => {
    console.log(`Hey! ${guestList}, Hope you're doing great ,you are invited for a dinner at my place , please come on time`);
});
