// example of a forEach Loop performing operations on on array

// The forEach() method gives you an alternative way to iterate over an
// array, and manipulate each element in the array with an inline function expression.

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
    donut += " hole";
    donut = donut.toUppperCase();
    console.log(donut);
});

/**
 * prints:
 * JELLY DONUT HOLE
 * CHOCOLATE DONUT HOLE
 * GLAZED DONUT HOLE
 */

/**
 * Notice that the forEach() method iterates over the array without the need of an
 * explicitly defined index. In the example above, donut corresponds to the element
 * in the array itself. This is different from a for or while loop where an index is
 * used to access each element in the array:
 */

 for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
    console.log(donuts[i]);   
 }

/**
  * The function that you pass to the forEach() method can take up to three parameters.
  * The forEach() method will call this function once for each element in the array
  * (hence the name forEach.) Each time, it will call the function with different arguments.
  * The element parameter will get the value of the array element. The index parameter will
  * get the index of the element (starting with zero). The array parameter will get a
  * reference to the whole array, which is handy if you want to modify the elements.
  */