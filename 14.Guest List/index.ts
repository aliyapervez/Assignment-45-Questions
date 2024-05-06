//Question No:14\
//Guest List:
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest:string[]= ["Marium","Amna","Fatima","Hina"]

//loop
//for each
//map


//Define an array of guest
//invite ezch for diiner

for (let i = 0; i < guest.length; i++) {
    console.log(`Dear! ${guest[i]} , Hope you're doing great ,you are invited for a dinner at my place , please come on time`);
}

//for each

guest.forEach(guestList => {
    console.log(`Hey! ${guestList}, Hope you're doing great ,you are invited for a dinner at my place , please come on time`)
});

//map()
//invite guests

let invitation: string[]=guest.map(guestList => `Dear! ${guestList} Hope you're doing great ,you are invited for a dinner at my place , please come on time`)
console.log(invitation);

//for each
invitation.forEach(invitations => {
    console.log(invitations)
});

//example of foreach and map to understand

//for each

let num=[2, 4, 6, 8, 10] ; 

num.forEach(number => console.log(number * 4));

 //map
 
 let multipleNum =num.map(number => number*2)
 console.log(multipleNum);