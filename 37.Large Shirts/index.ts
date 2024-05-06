//Question No:37
//Large Shirt: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//function

//print default meesage on large shirt
function make_shirt(size: string, message: string = "I love TypeScript") {
    console.log(`The size of the shirt is ${size} and the message is ${message}`);
}

//call function with by default values
make_shirt("large");

//print default meesage on medium shirt
make_shirt("medium");

//print default meesage on small shirt
make_shirt("small", "I love Pakistan");

make_shirt("medium", "Never is too late");

