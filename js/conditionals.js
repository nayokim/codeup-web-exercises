"use strict";
console.log("hi, this line is a test to make sure the files are connected");
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
var confirmNumber = confirm("Do you want to enter a number?"); // confirm function returns boolean. youre taking the boolean value and storing it in the variable
//
// if (confirmNumber) {
//     var enteredNumber = prompt("Enter your number");
//     if (enteredNumber) {
//         if (isNaN(enteredNumber)) {
//             alert("hey enter a number!")
//         } else {
//             var evenOrOdd = (enteredNumber % 2 === 0 ? "your number is even!": "your number is odd!");
//             alert(evenOrOdd);
//             // if (enteredNumber % 2 === 0) {
//             //     alert("your number is even!");
//             // } else {
//             //     alert("your number is odd!")
//             // }
//             var plusHundred = "If you add 100 to your number, you get: " + (parseInt(enteredNumber) + 100);
//             alert(plusHundred);
//             // if (enteredNumber > 0) {
//             //     alert("your number is positive");
//             // } else {
//             //     alert("your number is negative");
//             var posOrNeg = (enteredNumber >= 0 ? "your number is positive" : "your number is negative");
//             alert(posOrNeg);
//         }
//     }
//
// }

//function
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


//================================================= walkthrough solution =============================================================================

// var isEnteringNumber = confirm("would you like to enter a number");

// if (isEnteringNumber) {
//     var numberInput = prompt('please enter a number');
//     var parsedNumber = parseInt(numberInput);
//
//     // console.log(parsedNumber, isNaN(parsedNumber));
//     if (isNaN(parsedNumber)) {
//         alert("you didn't enter a number")
//     } else {
//         // alert ('you entered a number')
//         // * - whether the number is even or odd
//         //1. store the text: even or odd
//         //2. terinary expression
//         var evenOrOdd = (parsedNumber % 2 === 0) ? "Even" : "Odd";
//         // alert('the number is: ' + evenOrOdd); // the answer without functions
//         alert('the number is:' + evenOrOdd1(parsedNumber)); // if you use the function and pass the parameter through the function;
//         //     * - what the number plus 100 is
//         var plus100 = parsedNumber + 100;
//         // alert('the number plus 100 is: ' + plus100);
//         alert('the number plus 100 is: ' + plusHundred(parsedNumber));
//
//         //     * - if the number is negative or positive
//         //1. store the neg or pos
//         var negativeOrPositive = (parsedNumber >= 0) ? "positive" : "negative";
//         // alert("the number is: " + negativeOrPositive);
//         alert("the number is: " + negativeOrPositive1(parsedNumber));
//
//     }
// }
//
// //-------------------------------------------------REFACTORING WITH FUNCTIONS----------------------------------------------------------------
//
// //prompt the user for a number. will return the number of NaN if they dont enter a number.
//
// function promptForNumber(){
//     var numberInput = prompt('please enter a number');
//     return parseInt (numberInput);
// }
//
// //takes a number and returns the text "even" or "odd" depending on the number.
// function evenOrOdd1 (num){
//     if (num % 2 === 0){
//         return "even";
//     }else {
//         return "odd";
//     }
// }
//
// // add 100 to the number
// function plusHundred(aNumber){
//     return aNumber + 100;
// }
//
// //take a number and return the text "postive" or "negative"
// function negativeOrPositive1(aNumber){
// return (parsedNumber >= 0 ? "positive" : "negative");
// }


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

//
// function analyzeColor(color) {
//     if (color === "red") {
//         return color + "is the color of a flower";
//     } else if (color === "orange") {
//         return color + "is the color of an orange";
//     } else if (color === "yellow") {
//         return color + "is the color of the sun";
//     } else if (color === "green") {
//         return color + "is the color of grass";
//     } else if (color === "blue") {
//         return color + "is the color of the sky";
//     } else if (color === "indigo") {
//         return color + "is the color of a the ocean";
//     } else if (color === "violet") {
//         return color + "is the color of lavender";
//     } else {
//         return "I dont know anything of that color";
//     }
// }

//===walkthrough==

// function analyzeColor(color){
//     if (color === 'blue'){
//         return color + ' is the color of the sky';
//     } else if (color === 'red'){
//         return "strawberries are " + color;
//     } else if (color === 'cyan'){
//         return "i dont know anything about cyan";
//     }else {
//         return color + " is not valid";
//     }
// }
//
// console.log(analyzeColor("blue"));// returns "blue is the color of the sky
// console.log(analyzeColor("red"));// returns "starwberries are red
// console.log(analyzeColor("cyan"));// returns "i dont know anything about cyan"
// console.log(analyzeColor("green"));// returns "green is not valid"


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

//===================================walkthrough======================================
console.log('should be different everytime.' + analyzeColor((randomColor)));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColorTwo(color) {
//
//     switch (color) {
//         case "red":
//             alert("your color is red");
//             break;
//         case"orange":
//             alert("your color is orange");
//             break;
//         case "yellow":
//             alert("your color is yellow");
//             break;
//         case "green":
//             alert("your color is green");
//             break;
//         case "blue":
//             alert("your color is blue");
//             break;
//         case "indigo":
//             alert("your color is indigo");
//             break;
//         case "violet":
//             alert("your color is violet");
//             break;
//         default:
//             alert("you didnt pick a color!");
//             break;
//     }
// }

// analyzeColorTwo(analyzeColor(randomColor) + randomColor);


//=====================walkthrough====================================

function analyzeColor(color) {
    switch (color) {
        case "blue":
            return color + " is the color of the sky";
            break;

        case "red":
            return "strawberries are: " + color;
            break;

        case "cyan":
            return "i dont know anything about " + color;
            break;

        default:
            return color + " is not valid";
            break;
    }
}

console.log(analyzeColor("blue"));// returns "blue is the color of the sky
console.log(analyzeColor("red"));// returns "starwberries are red
console.log(analyzeColor("cyan"));// returns "i dont know anything about cyan"
console.log(analyzeColor("green"));// returns "green is not valid"

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

var priceAfterDiscount = alert("your lucky number was: " + luckyNumber + "." + "Your total bill prior to the discount was: " + totalBill + ".Your new total is: " + calculateTotal(luckyNumber, totalBill));

//=== walkthrough
var parsedNumber = promptForNumber ('please enter your total bill');
var finalTotal = calculateTotal(luckyNumber, parsedNumber);
alert ("your lucky number is"  + luckyNumber);
alert("total before discount is " + parsedNumber);
alert ('total after discount is ' + finalTotal);