"use strict";
console.log("hello from while.js");

//Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

//==practice again===

var i = 2;
while ( i <= 65536){
    console.log(i);
    i= i * 2;
}

//====first time====

// var i = 2;
// while ( i <= 65536){
//     console.log(i);
//     i = i * 2;
// }

//An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients.
//
// Use a do-while loop to log to the console the amount of cones sold to each person.

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

// This is how you get a random number between 50 and 100

// This expression will generate a random number between 1 and 5
//


var allCones = Math.floor(Math.random() * 50) + 50;
// var conesBeingPurchased = Math.floor(Math.random() * 5) + 1;
// do {
//     var conesBeingPurchased = Math.floor(Math.random() * 5) + 1;
//     console.log("number of cones being purchased: " + conesBeingPurchased);
//     console.log("cones remaining: " + allCones);
//     if (conesBeingPurchased > allCones) {
//         console.log('you cannot purchase ' + conesBeingPurchased + ' I only have ' + allCones + ' left.');
//     } else {
//         allCones = allCones - conesBeingPurchased; // step 1: modify cones remaining
//         console.log('here are your cones ' + conesBeingPurchased + ' there are ' + allCones + " left");
//     }
// }  while (allCones > 0) ;
// console.log ('yay you get to go home!!!!');

///========walkthrough answer==========

do{
    var conesToPurchase = Math.floor(Math.random() * 5) + 1;
    console.log('all cones: ' + allCones + ' cones to purcahse: ' + conesToPurchase)
    if (conesToPurchase <= allCones) {
        allCones -= conesToPurchase;
        //i can sell the cones
        console.log(conesToPurchase + " cones sold...");
        // conesToPurchase = conesToPurchase - allCones;

    } else {
        // i do not have enough cones to sell
        console.log("cannot sell you " + conesToPurchase + " cones I only have  " + allCones + "...." );
    }
} while (allCones > 0);

console.log('yay I sold them all!');
//
//