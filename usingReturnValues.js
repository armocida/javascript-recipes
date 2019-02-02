// good example of a functions return value being stored in variable and reused

/**
 * A function s return value can be stored in a variable or reused throughout
 * your program as a function argument.
 */

// returns the sum of two numbers
function add(x,y) {
    return x + y;
}

// returns the value of a number divided by 2
function divideByTwo(num) {
    return num / 2;
}

var sum = add(5,7); // call the "add" function and store the returned value in the "sum" variable
var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in "average" variable

/**
 * We have a function that adds two numbers together, and another function that divides a number
 * by 2. We can find the average of 5 and 7 by using the add() function to add a pair of numbers
 * together, and then by passing the sum of the two numbers add(5,7) into the function divideByTwo()
 * as an argument.
 * Finally, we store the final answer in a variable called average and use the variable to perform
 * even more calculations in more places.
 */