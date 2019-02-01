// good example of a nested loop

/**
 * You can nest loops inside of each other.
 */

 for (var x = 0; x < 5; x = x + 1){
     for (var y = 0; y < 3; y = y + 1){
         console.log(x + "," + y);
     }
 }

/**
 * prints: 0,0
 *         0,1
 *         0,2
 *         1,0
 *         1,1
 *         1,2
 *         2,0
 *         2,1
 *         2,2
 *         3,0
 *         3,1
 *         3,2
 *         4,0
 *         4,1
 *         4,2
 */

/**
 * Notice the order that the output is being displayed.
 * For each value of x in the outer loop, the inner for loop executes completely.
 * The outer loop starts with x = 0, and then the inner loop completes it's cycle
 * with all values of y.
 */

/**
 * x = 0 and y = 0, 1, 2 // corresponds to (0,0), (0,1), and (0,2)
 */

/**
 * Once the inner loop is done iterating over y, then the outer loop continues to
 * the next value, x = 1, and the whole process begins again.
 */

/**
 * x = 0 and y = 0, 1, 2    // (0,0) (0,1) and (0,2)
 * x = 1 and y = 0, 1, 2    // (1,0) (1,1) and (1,2)
 * x = 2 and y = 0, 1, 2    // (2,0) (2,1) and (2,2)
 * etc.
 */