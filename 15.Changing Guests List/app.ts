
//Question:No.15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

/*• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let guest:string[]= ["Marium","Amna","Fatima","Hina"]

//print the name of a person who can't make dinner

let unableAttend: string= guest.splice(1,1)[0];
console.log(`${unableAttend} is not invited for dinner`);

// replace the name with who can make dinner
//push

guest.push("Aliya");
console.log(guest);

//print invite message for each

guest.forEach(guestList => {
    console.log(`Hey! ${guestList}, Hope you're doing great ,you are invited for a dinner at my place , please come on time`)
});