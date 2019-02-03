// basic example of an anonymous inline function

/**
 * Write an anonymous function expression that stores a function in a variable
 * called "laugh" and outputs the number of ha's that you pass in as an argument.
 */

var laugh = function(num){
var string="";
    for (x = 0; x < num; x++){
    string+="ha";
    }
    return string +"!";
};
console.log(laugh(10));

// returns: hahahahahahahahahaha!