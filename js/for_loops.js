"use strict";
//1. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

function showMultiplicationTable(input){
    for (var i = 1; i < 11; i++){
        console.log(( input + '*'  + i + '=' +   (input * i)));
    }
}
showMultiplicationTable(1);
showMultiplicationTable(2);
showMultiplicationTable(3);
showMultiplicationTable(4);
showMultiplicationTable(5);
showMultiplicationTable(6);
showMultiplicationTable(7);
showMultiplicationTable(8);
showMultiplicationTable(9);
showMultiplicationTable(10);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...



console.log(randomNumber);

for (var i = 1; i <= 10; i++){
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (i % 2 === 0){
        console.log( randomNumber + ' is an even number');
    } else {
        console.log( randomNumber + ' is an odd number');
    }
}

//Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

function triangle(n) {
    for (var i = 1; i <= n; i++) {
        var lineNumber ='';
        for (var j = 0; j < i; j++) {
            lineNumber += i;
        }
        console.log(lineNumber);
    }
}
console.log(triangle(9));


//Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (var i = 100; i >= 5; i--){
    if (i % 5 === 0){
        console.log(i);
    }
}

