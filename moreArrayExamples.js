// more array examples and notes on arrays

/**
 * Index - References the location, or position of an element in an array.
 * If you try to access an element at an index that does not exist, a value of 
 * undefined will be returned back.
 * To change the value of an element in array, you can do so by setting it
 * equal to a new value.
 */

donuts[1] = "glazed cruller"; // changes the second element in the "donuts" array to "glazed cruller"
console.log(donuts[1]);

// prints: "glazed cruller"

// Arrays are a special kind of object

// Array Length - You can find the length of an array by using its length property.

var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);

// prints: 3

/**
 * To access the length property, type the name of the array followed by a period.
 * (you'll also use the period to access other properties and methods), and the word length.
 * The length property will then return the number of elements in the array.
 * You can also get the length of a string.
 */
