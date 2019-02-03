// basic built-in methods for adding/removing elements from an array

/**
 * Arrays have quite a few built-in methods for adding and removing elements
 * from an array. The two most common methods for modifying an array are push()
 * and pop()
 */

// Push - You can use the push() method to add elements to the end of an array

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", 
                "cinnamon sugar", "sprinkled"];

// Then you can push donuts onto the end of the array using the push() method
donuts.push("powdered"); // pushes "powdered" onto the end of the 'donuts' array

// returns: 7
// donuts array: ["glazed", "chocolate frosted", "Boston creme", "glazed cruller",
//               "cinnamon sugar", "sprinkled", "powdered"]

// The push() method returns the length of the array after an element has been added.

// Pop - You can use teh pop() method to remove elements from the end of an array.

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller",
              "cinnamon sugar", "sprinkled", "powdered"];

donuts.pop(); // pops "powdered" off the end of the 'donuts' array
donuts.pop(); // pops "sprinkled" off the end of the 'donuts' array
donuts.pop(); // pops "cinnamon sugar" off the end of the 'donuts' array

// returns: "cinnamon sugar"
// donuts array: ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"]

/**
 * With the pop() method you don't need to pass a value; instead, pop() will always
 * remove the last element from the end of the array.
 * Also, pop() returns the element that has been removed in case you need to use it.
 */