//Question No: 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an array of magician names
var magicians = ["Harry Potter", "Goerge", "Robert"];
//call the function to print each magician name from the array
show_magicians(magicians);
