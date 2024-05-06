//Question:no.19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guest:string[]= ["Sanobar","Marium","Fatima","Madiha","Hina","Aliya","Kainaat"]

console.log("It is to inform you that I can invite only two persons at dinner party, as i'm unable to arrange bigger table");

//remove some guest 

//while
while (guest.length > 2) {
   let removedGuest :string | undefined = guest.pop();
   if (removedGuest !== undefined) {
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner`);
   }
}

//print messeage to the rest of two person for invitation 
//for each


guest.forEach(guestInvited => {
    console.log(`Dear ${guestInvited} you are still invited for dinner, Please come on time`)
    
});

