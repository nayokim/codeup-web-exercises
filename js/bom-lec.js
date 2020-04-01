"use strict";
//setInterval()
//take a function, run it at a consistent interval. When you run it, it will returns a peice of data that we will need to clear later


var numberOfTimesRun = 0;

//created a variable and assigned it an anon.function.
// var intervalFunction = function (){
//     console.log('are we there yet ' + numberOfTimesRun);
//     numberOfTimesRun++;
// };
//
// intervalFunction();

var interval = setInterval(function(){
    console.log('are we there yet ' + numberOfTimesRun);
    numberOfTimesRun++;
},1000);

//no parenthesis with intervalFunction to call back the function
var interval = setInterval(intervalFunction,1000);
console.log('interval ' + interval);
// clearInterval(interval);


//higher order functions - make functions that pass functions
var names = ['douglas','fer','dimitri','christian'];
function myForEach(array, callback){
    for (var index = 0; index < array.length; index++){
        callback(array[index],index,array);
    }
}

myForEach(names,function(name,index,currentArray){
    console.log("element: "+ name);
    console.log("current index: " + index);
    console.log("the entire array: " + currentArray);
});

console.log('using an anonymus function assigned to a variable.');
var processElement = function(name,index,currentArray){
    console.log("element: "+ name);
    console.log("current index: " + index);
    console.log("the entire array: " + currentArray);
};

myForEach(names, processElement); // so we assigned a variable to the function. we dont call back the variable as a function (dont need ();).

//take in a function, run the function after the time set in milliseconds
setTimeout(intervalFunction,5000);

//this will run one second after
setTimeout(function(){
    console.log("Hello from one second from the page load.");
},1000);

