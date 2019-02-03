// good example of an inline function expression

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName){
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

// returns: My favorite movie is Finding Nemo

/**
 * Anonymous inline function expressions are often used with function callbacks that
 * are probably not going to be reused elsewhere. Yes, you could store the function in
 * a variable, give it a name, and pass it in like you saw in the example above.
 * However, wnen you know the function is not going to be reused, it could save you
 * many lines of code to just define it inline.
 */