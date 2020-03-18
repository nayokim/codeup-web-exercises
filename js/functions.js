"use strict";
console.log("hi! this is a test");
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 *
 */

function sayHello(name){
    return 'Hello,' + name + '!';
}

console.log(sayHello('codeup'));
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

sayHello('Nayoung');

var helloMessage = sayHello('Nayoung');
console.log(helloMessage);

var helloMessage = sayHello('Ed');
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = 'Nayoung'

console.log("var myName= ", sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 *
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num){
    return 2 === num;
}

// console.log(isTwo(1));
// console.log(isTwo(2));
// console.log(isTwo(3));
console.log('random number is: ', random, isTwo(random));

// function isTwo(num) {
//     if (num === 2) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(random);
// console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercent, bill){
    return (bill *tipPercent);
}

console.log('calculate tip of .20, 20', calculateTip(.20, 20));
console.log('calculate tip of .39, 35', calculateTip(.39, 35));
console.log('calculate tip of .10, 100', calculateTip(.10, 100));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var bill = Number(prompt ('How much was the total bill?'));
var tipPercent = Number(prompt ('What percent do you want to tip?'));
// tipPercent = tipPercent / 100; to make your prompt more user-friendly, you can add another line to divide the total number by 100 so the user only needs to put in a whole number.
var amountDue= alert('you should really tip:$ ' + calculateTip((tipPercent/100), bill) + '.00'); //you can also put the tip percent manipulation here too tipPercent/100

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(originalPrice,discountPercent){
    return (1-discountPercent) * originalPrice;
}

console.log(applyDiscount(100, .2));
console.log(applyDiscount(45.99, .12));

