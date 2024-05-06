//Question:11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//Defuining array of names
var names = ["Bisma", "Muskaaan", "Shafaq", "Tanya"];
//loop
//for each
//for loop
// loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(function (friends) {
    console.log(friends);
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var classFriends = names_1[_i];
    console.log(classFriends);
}
