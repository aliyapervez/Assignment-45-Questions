//Question No:42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


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

 let great_magicians = make_great(magicians)

show_magicians(great_magicians)
 
