(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names =['Nayoung', 'Ed', 'Jen', 'Matt'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var index = 0; index < names.length; index++){
        console.log(names[index]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */


    names.forEach(function(element, index, array) {
        console.log('element' , element);
        console.log('index' , index);
        console.log('original array' , array);


    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
//first: returns the first item in the array
    function returnFirst(){
        var first = [1, 2, 3, 4, 5];
            return(first [0]);
    }

    console.log(returnFirst());


    function returnSecond(){
        var second = [1, 2, 3, 4, 5];
        return(second [1]);
    }
    console.log(returnSecond());

    function returnLast(){
        var last = [1, 2, 3, 4, 5];
        return(last [last.length - 1]);
    }
    console.log(returnLast());



})();
