// more array examples and notes on methods which can be used on arrays

/**
 * Splice - is a handy method that allows you to do add and remove elements
 * from anywhere within an array!
 */

var donuts = ["glazed","chocolate frosted", "Boston creme", "glazed cruller"]
donuts.splice(1,1,"chocolate cruller","creme de leche");

// removes "chocolate frosted" at index 1 and adds "chocolate cruller" and
// "creme de leche" starting at index 1

// returns: ["chocolate frosted"]
// donuts array: ["glazed","chocolate cruller", "creme de leche", "Bosten creme", "glazed cruller"]

/**
 * The first argument represents the starting index from where you want to change the array.
 * The second argument represents the numbers of elements you want to remove, and the remaining
 * arguments represent the elements you want to add.
 */