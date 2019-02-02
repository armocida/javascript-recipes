// good example of a callback function

/**
 * Let's say you had a helloCat() function, and you wanted it to return "Hello"
 * followed by a string of "meows" like you had with catSays. Rather than redoing
 * all of your hardwork, you can make helloCat() accept a callbacl function, and
 * pass in catSays.
 */

// function expression catSays
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
        catMessage += "meow ";
    }
    return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) { 
    return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);

/**
 * A function that is passed into another function is called a callback.
 */