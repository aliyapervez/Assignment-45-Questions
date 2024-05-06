//Question No:45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

//define a function to create a car object with optional options..
function createCar(manufacturer, model,...options) {
   // initialize a car object with manufacturere and model
let car =
    {
        manufacturer: manufacturer,
        model: model 
    };
    // iterate through the options and add them to the car object
    options.forEach(Option => {
        let [key, value] = Option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

//call the function to create a car object
let my_car = createCar("Toyota","Corolla","color:Black", "WagonR: True","Year: 2024");

console.log(my_car);
