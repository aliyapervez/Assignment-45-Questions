//Question: no.33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
//define array 
var ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using forloop through the array
for (var _i = 0, ordinalNumber_1 = ordinalNumber; _i < ordinalNumber_1.length; _i++) {
    var oneNumber = ordinalNumber_1[_i];
    // let ordinalEnding: string
    //using if-else chain to print the proper ordinal ending for each number.
    if (oneNumber === 1) {
        console.log(oneNumber + "st");
    }
    else if (oneNumber === 2) {
        console.log(oneNumber + "nd");
    }
    else if (oneNumber === 3) {
        console.log(oneNumber + "rd");
    }
    else {
        console.log(oneNumber + "th");
    }
}
