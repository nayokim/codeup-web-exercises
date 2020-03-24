"use strict";

//Break and Continue
//
// Create a file named break_and_continue.js in the js directory.
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// Your output should look like this:
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

for (var i = 1; i < 51; i++) {
    var randomNumber = (Number(prompt('Pick a random number between 1 and 50 (inclusive)')));
    if (randomNumber > 0 && randomNumber < 51) {
        console.log("the number to skip is: " + randomNumber);
        break;
    }
}

for (var i = 1; i < 51; i++) {
    if (i % 2 === 1) {
        console.log('Here is an odd number: ' + i);
    }
}


//     if (i % 2 !== 0) {
//         console.log("here is an odd number: " + i);
//     } else if (i === randomNumber) {
//         console.log('Yikes! Skipping number: ' + randomNumber);
//     } else if (i > randomNumber && i % 2 !== 0) {
//         console.log("here is an odd number: " + i);
//     }
// }


// var randomNumber = (prompt('Pick a random number between 1 and 50 (inclusive)'));
// for (var i = 1; i < 51; i++) {
//     if (randomNumber > 0 && randomNumber < 51 ) {
//         console.log('randomNumber is: ' + randomNumber);
//         break;
//     }
//     if (i % 2 === 0 && i !== randomNumber) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//     console.log("Here is an odd number: " + i);
