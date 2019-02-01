// good intermediate example of a nested for loop

/**
 * A nested loop to print out all the different seat combinations in theatre.
 * First row-seat combination should be 0-0
 * Last row-seat combination should be 25-99
 */

for (var i = 0; i < 26; i++){
    for (var j = 0; j < 100; j++){
        console.log(i + "-" + j);
    }
}

/**
 * Note: row and seat numbers start at 0, not 1
 * Highest seat number is 99, not 100
 */