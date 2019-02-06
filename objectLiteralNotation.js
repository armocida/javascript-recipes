// some notes on object-literal notation

var sister = {
    name: "Sarah", 
    age: 23,
    parents: [ "alice", "andy" ],
    siblings: ["julia"],
    favoriteColor: "purple",
    pets: true
  };

/**
 * This syntax is called object-literal notations. There are some important
 * things you need to remember when you're structuring an object literal.
 */

/**
 * The "key" (representing a property or method name) and its "value" are
 * seperated from each other by a colon
 * The key:value pairs are separated from each other by commas
 * The entire object is wrapped inside curly braces { }
 */

/**
 * Kind of like how you can look up a word in the dictionary to find its
 * definition, the key in a key:value pair allows you to look up a piece of
 * information about an object. Here are a couple examples of how you can
 * retreive information about my sister's parents using the object you created.
 */

// two equivalant ways use the key to return its value

sister["parents"] // is called bracket notation (because of the brackets!) and
sister.parents // also return s ["alice", "andy"]

/**
 * Using sister["parents"] is called bracket notation (because of the brackets!)
 * and using sister.parents is called dot notation (because of the dot!)
 */