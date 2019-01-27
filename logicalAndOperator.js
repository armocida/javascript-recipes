/* The && symbol is the logical AND operator and it is ued to combine two logical
* expressions into one larger logical expression. If both smaller expressions are
* true, then the entire expression evaluates to true. If either one of teh smalller
* expressions is false, then the whole logical expression is false.
*/

var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") {
    console.log("go to the park");
}

// prints: go to the park

/* Another way to think about it is when the && operator is placed between the two
* statements, the code literally reads, "if cold is not busy AND the weather is nice,
* then go to the park".
*/