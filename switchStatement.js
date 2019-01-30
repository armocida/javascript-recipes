/** 
* A Switch statement is an another way tio chain multiple else if statments that are based on the
* same value without using coditional statements. Instead, you just switch which piece of code is
* executed based on a value.
*/

var option = 3;

switch (option) {
    case 1:
        console.log("You selected option 1.");
        break;
    case 2:
        console.log("You selected option 2.");
        break;
    case 3:
        console.log("You selected option 3.");
        break;
    case 4:
        console.log("You selected option 4.");
        break;
    case 5:
        console.log("You selected option 5.");
        break;
    case 6:
        console.log("You selected opiton 6.");
        break; // technically, not needed
}

// prints: You selected option 3.

/** 
* To prevent the 'falling through' behavior we need to insert break statements in the code.
* The break statement can be used to terminate a switch statement and transfer control to the
* code following the terminated statement. By adding a break to each case clause, you fix the
* issue of the switch statement falling-thorough to other case clasuse.
*/