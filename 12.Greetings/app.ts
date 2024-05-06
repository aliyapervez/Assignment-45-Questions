//* Question:12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*//

//greetings to friends
// deines an array of names and message 

let names: string[]= ["Bisma","Muskaan", "Tanya", "Shafaq"];

//loop
//for each
// for of loop

for (let i = 0; i < names.length; i++) {
    console.log(`Hello!, ${names[i]} What are you doing today?`);
}

//for each

names.forEach(friend => {
    console.log(`Hi!${friend} What are you doing today`);
});

//for of loop

for ( let friendName of names) {
    console.log(`Hey!${friendName} What are you doing today` )
}
    
