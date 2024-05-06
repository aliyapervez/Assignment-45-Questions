//Question No:37
//Large Shirt: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//function
function make_shirt(size, message) {
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of the shirt is ".concat(size, " and the message is ").concat(message));
}
make_shirt("large");
make_shirt("medium");
make_shirt("small", "I love Pakistan");
make_shirt("medium", "Never is too late");
