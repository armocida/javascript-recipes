// good example of a basic for loop

/** 
 * Example of a for loop that prints out the values from 0 to 5. Notice the
 * semicolons seperating the different statements of the for loops:
 * var i = 0; i < 6; i = 1 + 1
 */

for (var i = 0; i < 6; i = i + 1) {
    console.log("Printing out i = " + i);
}

/**
 * prints:
 * Printing out i = 0
 * Printing out i = 1
 * Printing out i = 2
 * Printing out i = 3
 * Printing out i = 4
 * Printing out i = 5
 */

/**
 * The for loop explicitly forces you to define the start point, stop point,
 * & each step of the loop. In fact, you'll get an Uncaught SyntaxError:
 * Unexpected token ) if you leave out any of the three required pieces.
 */