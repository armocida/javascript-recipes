// it is important to differentiate between returning and logging

/**
 * It is important to understand that return and print are not the same thing.
 * Printing a value to the JavaScript console only displays a value (that you can
 * view for debugging purposes), but the value it displays can't really be used
 * for anything more than that.
 * For this reason you should remember to only use console.log to test your code
 * in the JavaScript console.
 */

function isThisWorking(input) {
    console.log ("Printing: isThisWorking was called and " + input + " was passed in as an argument.")
    return "Returning: I am returning this string!";
}

isThisWorking(3);

/**
 * prints: "Printing: isThisWorking was called and 3 was passed in as an argument."
 * returns: "Returning: I am returning this string!"
 * If you don't explicitly define a return value, the function will return undefined
 * by default.
 */