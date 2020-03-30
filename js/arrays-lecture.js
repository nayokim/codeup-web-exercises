"use strict"

console.log('ready to go');

// if you are trying to list names, you have to declare a variable over and over again
// var douglas = "douglas";
// var fer = "fer m";

//instead - create one variable and use a data structure to say all the names inside

var cohort = ['Douglas', 'sophie', 'Fer', 1 , 3.4];
//length = 4.

//last item index = length -1 (because we always start from zero).

//the number of items in the array.
console.log("cohort length: ",  cohort.length);

// you get -1 if the item that you are looking for doesnt exist
console.log('index of Fer Mendoza' , cohort.indexOf("Fer Mendoza"));
console.log( 'index of Fer' , cohort.indexOf('Fer') );
console.log('get Fer' , cohort[cohort.indexOf('Fer')]);



//We often ask how big an array is to make loops automatic. Without a loop, you have to log each value in a line.
// console.log(cohort[0]);
// console.log(cohort[1]);
// console.log(cohort[2]);
// console.log(cohort[3]);

for (var index = 0; index < cohort.length; index++){
    console.log("cohort[index] " + index , cohort[index]);
}

//forEach works with callback functions - function that is executed while the loop runs. you use it once and you dont use it again


//anon. function - used once.
// var doSomething = function (){
//
// }


cohort.forEach(function(element, index, array) {
    console.log('element' , element);
    console.log('index' , index);
    console.log('original array' , array);


});


// cohort === name of array
//function will always be function - anon. function. As long as its being used with foreach, it will be anon.
//simplified version of for loop but using arrays

// the first element is the element in the array. the second element is the index value of it.

//for loops - you can control over everything.
//
// for each - element, index, and array.

for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}

students.forEach(function(student) {
    console.log(student);
});

const days = ['mon','tue','wed','thur','fri','sat']

let sayHello= function (){
    console.log("hi");
}
days.forEach(sayHello);