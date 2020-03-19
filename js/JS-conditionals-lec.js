"use strict"

console.log('hi this is a test');

//real world scenario
//if a user is an admin, show a specific navbar
//if weather is rainy, show rain icon
//if number of lives is 0, game is over

//IF statement syntax
//code here runs if condition evaluates to true

var isAdmin = true;
if (isAdmin) {
    console.log("Turn on the admin navbar.");
}

// send 20% off coupon if its users birthday

var isBirthday = true;
if (isBirthday) {
    console.log('send them coupon');
}

//do i have enough money to buy this item?
var currentBalance = 1000;
var itemCost = 500;

if (currentBalance > itemCost) {
    // alert ('you can buy it!'); if the condition is false, it skips over the code and it doesnt exist
}

// if / else syntax
//if (condition){
// //code here runs if condition evaluates to true
// } else {
// code here runs if condition evalutes to false
//}

var isAdmin = false;
if (isAdmin) {
    //if true run this code;
    console.log('display admin navbar')
} else {
    //if false run this code;
    console.log('display regular navbar')
}

// var numberOflives = 0;
// if (numberOflives === 0){
//     alert('game over :(');
// } else {
//     alert('next level');
// }
// double equals vs triple equals : do you care about the data type?
// var dollarAmount= prompt ('give me the money');
// dollarAmount = parseInt(dollarAmount);
// console.log(typeof dollarAmount);

//refactor number of lives into a function
function checkIfGameOver(numberOfLives) {
    if (numberOfLives === 0) {
        return "sorry, game over :("
    } else {
        return "Next level!"
    }
}

//
// alert(checkIfGameOver(0));
// alert(checkIfGameOver(5));

// IF/ ELSE IF/ELSE STATEMENT SYNTAX
// if (condition1) {
//     // code here gets executed if condition1 evaluates to true
// } else if (condition2) {
//     // code here gets executed only if condition1 is false *and* condition2 evaluates to true
// } else {
//     // code here gets executed if neither condition1 nor condition2 evaluate to true
// }

// var weather = 'raining';
// if (weather === 'snowing'){
//     alert ("stay inside");
// } else if (weather ==='raining') {
//     alert ('get an umbrella');
// } else {
//     alert ('you are good to go. Enjoy the weather');
// }

function checkWeather(weather) {
    if (weather === 'snowing' || weather === 'hailing') {
        return 'stay inside';
    } else if (weather === 'raining') {
        return 'get an umbrella';
    } else if (weather === 'hailing') {
        return 'take cover'
    } else {
        return 'you are good to go. Enjoy the weather';
    }

}

console.log(checkWeather('snowing'));
console.log(checkWeather('raining'));
console.log(checkWeather('Sunny'));
console.log(checkWeather('hailing'));

// var pizzaPreference = prompt("what kind of pizza do you like").toLowerCase();

// if (pizzaPreference === "pepperoni"){
//     alert ("what a coincidence, I love that one too.");
// } else if (pizzaPreference === "pineapple and hotsauce"){
//     alert ("that is a spicy pizza");
// } else if (pizzaPreference === "steak"){
//     alert ("steak is great");
// } else if (pizzaPreference === "cheese") {
//     alert ("plain cheese is a-okay");
// } else {
//     alert (pizzaPreference + " isn't my favorite");
// }


//NESTED IF STATEMENTS

//if user is under 15, they are not eligible for a learners permit, else they are. If they ar eligible, check age. If they are 15 they are eligible for a learners permit. If they are 16 or older and have a permit, they ar eligible for a license. If they are 16 or older and do not have a permit, they are not eligible for a license.

// var userAge = 16;
// var hasPermit = false;
//
// if (userAge < 15) {
//     alert (" you are not eligible for a permit");
// } else {
//     // all other possibilities.
//     if (userAge === 15){
//         alert ("you are eligible for a learner's permit");
//     } else if (userAge >=16 && hasPermit){
//         alert ("you can get a driver's license")
//     } else if (userAge >= 16 && !hasPermit){
//         alert ("you need a permit before you get your driver's license");
//     } else {
//         alert ("we dont have enough information to determine your eligibility");
//     }
// }

//terinary statements
//
var message;
var success = true;

// if (success){
//     message = "operation was successful";
// } else {
//     message = "oops something went wrong.";
// }

//condition = an expression that evaluates to true of false. It can be comparing variables or numbers or strings.

var message = success ? "operation was successful" : "oops something went wrong";
console.log(message);


var weather = "sunny";
var weatherMessage;

// if (weather === "rainy"){
//     weatherMessage = "Its Raining";
// } else {
//     weatherMessage = 'Have a nice day';
// }

//terinary
weatherMessage = (weather === 'rainy') ? "its raining" : "have a nice day";

console.log(weatherMessage);

//SWITCH STATEMENTS if the question doesnt have an answer of two answers (yes or no), switch statements are probably good to use. There are several options.

var pizzaPreference = prompt("what kind of pizza do you like?").toLowerCase();
var pizzaConfirmation;

switch (pizzaPreference) {
    case "pepperoni" :
        pizzaConfirmation = "What a coincidence, that's my favorite!"
        break;
    case "pineapple and hot sauce":
        pizzaConfirmation = " that is a spicy pizza";
        break;
    case "cheese":
        pizzaConfirmation = "cheese is fine too";
        break;
    default:
        pizzaConfirmation = (pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}

console.log(pizzaConfirmation);
