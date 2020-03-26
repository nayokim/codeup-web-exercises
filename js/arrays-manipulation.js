"use strict"

var names = ['Douglas','zach','Fer', 'Sophie', 'Vivian'];
var numbers = [12,67,3,10]
console.log('original names list' , names);
// adding to an existing array
//adding to the begging of the array
// names.unshift(prompt('Give me your name: '));
// console.log(names);


//adding to the end of an array
// names.push(prompt('What is your name'));
// console.log(names);


//
//
// console.log('names before pop()' , names.pop());

//if you are about the element that we removed:

// var removedItem= names.pop();
// alert( removedItem + ' was removed');
//
// console.log('names after .pop()' , names);


//removing the first item using .shift()
// var firstItemRemoved = names.shift();
// alert (firstItemRemoved +  ' was removed');
//
// //ttd
// console.log(firstItemRemoved === 'Douglas');



//locating array elements. indexOf - checks for type and value (===)
// console.log(names.indexOf("Fer")); // will give you a value of 1 since it is first in the array
// console.log(names.indexOf("Fers")); // will give you a -1. this mean it doesnt exist
//
// console.log(names);
// console.log('names.indexOf(12): ' ,names.indexOf(12));
// names.push(0);
// names.push("12");
// console.log(names);
// console.log('names.indexOf("12"); ', names.indexOf("12"));

//slicing

// var pieces = names.slice(3);
// console.log('pieces: ', pieces);
//
// var peicesByRange = names.slice(1,3);
// console.log('piecesbyrange: ' , peicesByRange);  // ranges is not inclusive.
//

//reversing
// names.reverse();
// // console.log('names.reverse(): ' , names);

//sorting
// names.sort();
// // numbers.sort();
// // console.log('names.sort()' , names);
// // names.reverse();
// // console.log('from z to a' , names);
// // console.log('numbers.sort()' , numbers);

var salariesString = "500,234|900,456|600,212";
var salariesArray = salariesString.split("|");
console.log(salariesString);
console.log(salariesArray);
