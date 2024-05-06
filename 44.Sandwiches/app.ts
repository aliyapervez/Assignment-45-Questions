//Question nno:44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//Define a function with a rest parameter that accept items arguments representing our sandwich
function sandwich(items:string[]){

    console.log("\n making a sandwich has the following items: \n");
  
    items.forEach(singleItem => console.log("-" +singleItem));
   
    console.log("\n sandwich is ready");
    console.log("now enjoy sandwich");
}   
   //cal the function three times with three different arguments

    sandwich(["ketchup","cheese","lettuce","tomato"]);
    sandwich(["bread","chicken","egg","tomato","onion"]);
    sandwich(["bread","salt","pepper","sauce","onion","mayo"]); 

    
