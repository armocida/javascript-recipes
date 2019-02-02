// good example of a basic function

/**
 * Write a function called 'laugh' with a parameter named 'num' that
 * represents the number of ha's to return.
 * - make sure final character is an ("!") mark
 * - make sure function produces correct results when called multipl times
 */

 function laugh(num) {
     var ha='';
     for(var i=0; i<num; i=i+1) {
         ha+="ha";
         string=ha+"!";
     }
     return string;
 }

 console.log(laugh(3));