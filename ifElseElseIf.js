/**
* If Else Statements allow you to execute certain pieces of code based on a condition, or set
* of conditions, being met.
*
* if (this expression is true) {
*    // run this code
*  } else {
*    // run this code
* }
*/

/**
*In JavaScript, you can represent this secondary check by using an extra if statement called
* an else if statement.
*/

var weather = "sunny";

if (weather === "snow") {
    console.log("Bring a coat.");
}   else if (weather === "rain"){
    console.log("Bring a rain jacket.");
}   else {
    console.log("Wear what you have on.");
}

/** 
* prints: Wear what you have on.
* The else statement essentially acts as the "default" condition in case all the other if Statements
* are false.
*/