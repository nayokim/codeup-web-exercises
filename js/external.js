"use strict"

console.log("Hello from external JavaScript");

alert('Welcome to my website!');

var userInput = prompt ('What is your favorite color?');
alert ('Great my favorite color is ' + userInput + ' too!');


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var dailyRate = prompt('what is the daily rate?');

var littleMermaid = Number(prompt('how many days will you be renting little mermaid?'));
var brotherBear =  Number(prompt('how many days will you be renting brother bear?'));
var hercules= Number(prompt('how many days will you be renting hercules?'));

var totalCost=(dailyRate * (littleMermaid + brotherBear + hercules));

var promptedCost = alert( 'your total cost will be: ' + totalCost);

//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.