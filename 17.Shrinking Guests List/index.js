"use strict";
//Question:No:17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
let guest = ["Sanobar", "Marium", "Fatima", "Madiha", "Hina", "Aliya", "Kainaat"];
console.log("It is to inform you that I can invite only two persons at dinner party, as i'm unable to arrange bigger table");
//remove some guest 
//while
while (guest.length > 2) {
    let removedGuest = guest.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, I can't invite you to dinner`);
    }
}
//print messeage to the rest of two person for invitation 
//for each
guest.forEach(guestInvited => {
    console.log(`Dear ${guestInvited} you are still invited for dinner, Please come on time`);
});
//Remove remaining two names
guest.splice(0, guest.length);
//print updated empty list
console.log("updated empty list:", guest);
