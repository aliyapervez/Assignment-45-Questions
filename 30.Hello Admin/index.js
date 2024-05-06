//Question: no.30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//define array
var userNames = ['Admin', 'Areeba', 'Laiba', 'Maham', 'Benish', 'Shafia'];
//loop through the array
//using for each
userNames.forEach(function (users) {
    if (users === "Admin") {
        console.log("Hello ".concat(users, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(users, ", thank you for logging in again."));
    }
});
