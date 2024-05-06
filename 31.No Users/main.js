//Question no: 31
//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = ['Admin', 'Areeba', 'Laiba', 'Maham', 'Benish', 'Shafia'];
userNames = [];
if (userNames.length === 0) {
    console.log("Array is empty we need to find some users!");
}
else {
    userNames.forEach(function (users) {
        if (users === "Admin") {
            console.log("Hello ".concat(users, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(users, ", thank you for logging in again."));
        }
    });
}
//     console.log(userNames);
//     userNames.splice(0, userNames.length);
//     console.log(userNames);
// // }
