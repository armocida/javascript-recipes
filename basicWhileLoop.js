// good example of a basic while loop which includes all three parts

var start = 0; // when to start
while ( start <10 ){    //when to stop
    console.log(start);
    start = start + 2;  //how to get to the next item
}

/**
 * prints: 0
 *         2
 *         4
 *         6
 *         8
 *         10
 */

/**
 * If a loop is missing any of these three things, then you might find
 * youself in trouble. A missing stop condition can result in a loop that
 * never ends!
 */

/**
 * There are many different kinds of loops, but they all essentially do
 * the same thing: they repeat an action some number of times.
 * Three main pieces of information that any loop should have are:
 * 1. When to start: The code that sets up the loop - defining the starting
 * value of a variable for instance.
 * 2. When to stop: The logical condition to test whether the loop should
 * continue.
 * 3. How to get to the next item: The incrementing or decrementing step -
 * for example, x = x * 3 or x = x - 1
 */ 