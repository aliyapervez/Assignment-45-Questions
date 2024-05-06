//Question:11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

//Defuining array of names
let names: string[]=["Bisma","Muskaaan", "Shafaq", "Tanya"];

//loop
//for each
//for loop


// loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

//for each

names.forEach(friends=> {
    console.log(friends);
});
    
//for of loop
for (const classFriends of names) {
    console.log(classFriends);
}


    
