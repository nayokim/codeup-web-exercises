"use strict";
console.log("hi, this is a test to make sure the files are connected")
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var confirmNumber = confirm("Do you want to enter a number?");

if (confirmNumber) {
    var enteredNumber = prompt("Enter your number");
    if (enteredNumber) {
        if (isNaN(enteredNumber)) {
            alert("hey enter a number!")
        } else {
            alert(enteredNumber % 2 === 0 ? "your number is even!": "your number is odd!")
            // if (enteredNumber % 2 === 0) {
            //     alert("your number is even!");
            // } else {
            //     alert("your number is odd!")
            // }
            alert(parseInt(enteredNumber) + 100);
            // if (enteredNumber > 0) {
            //     alert("your number is positive");
            // } else {
            //     alert("your number is negative");
            alert(enteredNumber > 0 ? "your number is positive" : "your number is negative");
        }
    }

}
;

// //function
// var answerQuestion = prompt("Enter your number");
//
// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         return alert('Your number is even');
//     } else {
//         return alert("your number is odd");
//     }
// }
//
// evenOrOdd(10);
//
//
// function addOneHundred(num) {
//     return alert(num + 100);
// }
//
// addOneHundred(10);
//
// function positiveOrNegative(num) {
//     if (num > 0) {
//         return alert("your number is positive");
//     } else {
//         return alert("your number is negative");
//     }
// }
//
// positiveOrNegative(num);


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color) {
    if (color === "red") {
        return "your color is red!";
    } else if (color === "orange") {
        return "your color is orange";
    } else if (color === "yellow") {
        return "your color is yellow";
    } else if (color === "green") {
        return "your color is green";
    } else if (color === "blue") {
        return "your color is blue";
    } else if (color === "indigo") {
        return "your color is indigo";
    } else if (color === "violet") {
        return "your color is violet"
    } else {
        return "you didnt pick a color"
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(randomColor);
// console.log(analyzeColor(randomColor) +  "the random color is: " + randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColorTwo(color) {

    switch (color) {
        case "red":
            alert("your color is red");
            break;
        case"orange":
            alert("your color is orange");
            break;
        case "yellow":
            alert("your color is yellow");
            break;
        case "green":
            alert("your color is green");
            break;
        case "blue":
            alert("your color is blue");
            break;
        case "indigo":
            alert("your color is indigo");
            break;
        case "violet":
            alert("your color is violet");
            break;
        default:
            alert("you didnt pick a color!");
            break;

    }
}

// analyzeColorTwo(analyzeColor(randomColor) + randomColor)


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userInput = prompt("Pick a color!");
var coloroutput = alert(analyzeColor(userInput));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 0) {
        return "your total is: " + (totalAmount);
    } else if (luckyNumber === 1) {
        return "your total is: " + ((1 - .10) * totalAmount);
    } else if (luckyNumber === 2) {
        return "your total is: " + ((1 - .25) * totalAmount);
    } else if (luckyNumber === 3) {
        return "your total is: " + ((1 - .35) * totalAmount);
    } else if (luckyNumber === 4) {
        return "your total is: " + ((1 - .50) * totalAmount);
    } else if (luckyNumber === 5) {
        return "you get all for free!";
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = parseInt(prompt("what is your total bill?"));
var priceAfterDiscount = alert("your lucky number was: " + luckyNumber + "." + "your total bill prior to the discount was: " + totalBill + ".Your new total is: " + calculateTotal(luckyNumber, totalBill));