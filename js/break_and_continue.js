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


//==walkthrough
do {
    console.log('breaking out');
    break;
}while (true);

var userNumber = 0;

do{
    var userNumber = Number( prompt('please enter an odd number between 1 and 50'));
    if (userNumber < 1 || userNumber > 50 ){
        alert (userNumber + ' is not between 1 and 50 and odd.')
    } else if ( userNumber % 2 === 0) {
        alert (userNumber + ' is not odd. Please try again.');
    }else if(isNaN(userNumber)){
        alert(userNumber + ' is not a number. Please try again.');
    }else{
        alert ('yay! you entered a valid number');
        break;
    }
}while(true);

console.log("the number to skip is: " + userNumber);
for ( var i = 1; i <= 50; i+=2){
    if (i === userNumber){
        console.log('Yikes! We will skip: ' + userNumber);
        continue;
    }
    console.log("here is odd number: " + i);
}

// while(true) {
//     var randomNumber = parseInt(prompt("Give me an odd number between 1 and 50."));
//     if (randomNumber % 2 !== 0 && randomNumber <= 50 && randomNumber >= 1) {
//         break;
//     }
// }
// console.log ("Number to skip is: " + randomNumber);
//
// for (var i = 0; i <= 50; i+=2) {
//     if (i === randomNumber) {
//         console.log('Yikes! Skipping number:' + i);
//         continue;
//     }
//         console.log('Here is odd number: ' + i);
// }