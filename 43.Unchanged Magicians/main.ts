//Question No : 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//define a function to print each magician name from an array
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
 }
 //define a function to add the phrase the Great to each magician's name
 function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
 }


//  //define an array of magician names
 let magicians = ["Harry Potter", "Goerge", "Robert"]

//making a copy of original array through slice() function

let copy_magician_names = magicians.slice()

//modify the copied array to include "the Great" with their names
let  copy_great_magicians = make_great(copy_magician_names);

//show both arrays original and copied

//otiginal
console.log("Original Array\n");

 show_magicians(magicians);

 //copied
 console.log("\nCoppied Array");
 
 show_magicians(copy_great_magicians);