//Question:No.20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

//define array of names
let mountains: string[] = ["Everest", "KaraKoram","Denali","Mount Elbrus"]
console.log("List of mountains ", mountains.forEach(mountain => {
    console.log(mountain);
    
}));


let rivers: string[] = ["Amazon","Indus","Nile","Congo","Mekong"]
console.log("List of rivers" , rivers.forEach(river =>{
    console.log(river);
    
}));


let countries: string[] = ["Nepal","Pakistan","China","USA","Palestine"]
console.log("List of countries" ,countries.forEach(country  => {
    console.log(country);
    
}));


let cities: string[] = ["Karachi","Islamabad","Lahore","London","Tokyo"]
console.log("List of cities" ,cities.forEach(city => {
    console.log(city);
}));


let languages: string[] = ["English","Hindi","Urdu","Spanish","French"]
console.log("List of languages" ,languages.forEach(language => {
    console.log(language);
}));


let foods: string[] = ["Biryani","Pasta","Chiken Karahi","Mughlai Tikka"]
console.log("List of food" ,foods.forEach(food => {
    console.log(food);
}));
