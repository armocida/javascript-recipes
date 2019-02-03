/**
 * An array is a data structure that you can use to store multiple values
 * and arrays are also organized. An array is usefult becuase it stores multiple
 * values into a single, organized data structure. You can define a new array by
 * listing values seperated with commas between square [] brackets.
 */

 // Here are some examples of basic arrays

 // creates a 'donuts' array with three strings
 var donuts = ["glazed", "powdered", "jelly"];

/**
 * strings aren't the only type of data you can stoe in an array. You can
 * also store numbers, booleans... and really anything!
 */

 // creates a 'mixedData' array with mixed data types
 var mixedData = ["abcd", 1, true, undefined, null, "all the things"];

 // You can even store an array in an array to create a nested array!

 // creates a 'arraysInArrays' array with three arrays
 var arraysInArrays = [[1,2,3], ["Julia", "James"], [true, false,true, false]];

/** Nested arrays can be particularly hard to read, so it's common to write them
 * on one line, using a newline after each comma:
 */

 var arraysInArrays = [
     [1, 2, 3],
     ["Julia", "James"],
     [true, false, true, false]
 ];