//Question no:27
//// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// //
// statement no:1
var alien_color = "green";
//statements using if / else conditions
if (alien_color === "green") {
    console.log("(Version 1) The player shot the green color alien ,player just earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("The player shot the yellow color alien ,player just earned 10 points");
}
else if (alien_color === "red ") {
    console.log("The player shot the red color alien ,player just earned 15 points");
}
// sstatement no: 2
var alien_color2 = "yellow";
if (alien_color2 === "green") {
    console.log("The player shot the green color alien ,player just earned 5 points");
}
else if (alien_color2 === "yellow") {
    console.log("(Version 2) The player shot the yellow color alien ,player just earned 10 points");
}
else if (alien_color2 === "red ") {
    console.log("The player shot the red color alien ,player just earned 15 points");
}
// statement no:3
var alien_color3 = "red";
if (alien_color3 === "green") {
    console.log("The player shot the green color alien ,player just earned 5 points");
}
else if (alien_color3 === "yellow") {
    console.log("The player shot the yellow color alien ,player just earned 10 points");
}
else if (alien_color3 === "red") {
    console.log("(Version 3) The player shot the red color alien ,player just earned 15 points");
}
