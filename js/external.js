"use strict"

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var userInput = prompt ('What is your favorite color?');
alert ('Great my favorite color is ' + userInput + ' too!');


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
//We can use the Number(value) function to explicitly convert a value to a number:

var dailyRate = prompt('What is the daily rate to rent a movie?');

var littleMermaid = Number(prompt('How many days will you be renting little mermaid?'));
var brotherBear =  Number(prompt('How many days will you be renting brother bear?'));
var hercules= Number(prompt('How many days will you be renting hercules?'));

var totalCost=(dailyRate * (littleMermaid + brotherBear + hercules));

var promptedCost = alert( 'Your total cost will be:$ ' + totalCost + (".00"));



//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var amazonHours = +(prompt("How many hours did you work for Amazon?"));
var googleHours = +(prompt("How many hours did you work for Google?"));
var facebookHours = +(prompt ("How many hours did you work for facebook?"));

var amazonRate = +(prompt("What is your rate for Amazon?"));
var googleRate = +(prompt("What is your rate for Google?"));
var facebookRate = +(prompt("What is your rate for Facebook??"));

var thisWeeksPayment = ((amazonRate * amazonHours) + (googleRate * googleHours) + (facebookRate * facebookHours));

var alertedWeeklyPayment= alert('This week, you will be paid:$ ' + thisWeeksPayment + '.00');

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//walkthrough answer

var isClassFull = false;
var isClassConflict = false;

var canAttendClass = (!isClassFull && !isClassConflict); // the student can attend the class if the class is NOT full and there is NOT a conflict. Typically I go for the opposite of what my code is trying to determine. So if I was about to check some external source of data for if the class is full I would set my variable to false until I determine if there is space in the class.var goOnVacations = false;  it will only turn true when some conditions change
alert ("student can attend class " + canAttendClass);


//alone answer
// var isTheClassFull = confirm('Is the class full?');
// var classConflictWithSchedule = confirm('Does this class conflict with any of your current classes in your schedule?');
//
//
// var canEnroll = (!isTheClassFull && !classConflictWithSchedule);
//
// if (!isTheClassFull && !classConflictWithSchedule) {
//     alert("you can enroll in this class!");
// } else {
//     alert ('you cannot enroll in this class!');
// }


//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

//walkthrough
var numberOfItems = prompt ('How many items do you want to buy?');
numberOfItems = parseInt(numberOfItems);

numberOfItems = parseInt(numberOfItems);
var numberofItemsRequired = prompt('how many items are required for the offer?');
numberofItemsRequired = parseInt(numberofItemsRequired);

var isOfferExpired = false;
var isCustomerPremium = false;

var isOfferValid = (isCustomerPremium && !offerExpired || (numberOfItems >= numberofItemsRequired  && !isOfferExpired) );

alert("offer is valid" + isOfferValid);


// var productsBought = prompt('Many products have you purchased?');
// var offerExpired = confirm('Has the offer expired?');
// var premiumMembers = confirm ('Are you a premium member?');
//
// var productOfferValid = (productsBought > 2 && !offerExpired || !offerExpired && premiumMembers);
//
// var promptedOfferMessage= alert("your offer is " + productOfferValid);