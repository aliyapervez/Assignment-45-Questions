//Question: no.36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function
function make_shirt(size, printMessage) {
    console.log("You selected ".concat(size, " size shirt with ").concat(printMessage, " print on shirt"));
}
make_shirt("Medium", "Life Is beautiful");
make_shirt("Small", "Visdom");
