'use strict';
console.log('test');

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const threeLanguages = users.filter((user) => user.languages.length >=3);

// let threeLanguages = users.filter(function(user){
//     console.log(user.languages.length);
//     return user.languages.length >=3;
// });

console.log(threeLanguages);
// const threeLanguages = users.filter(function(value){
//     return value.languages.length >=3;
// });
// console.log(threeLanguages);

//     Use .map to create an array of strings where each element is a user's email address

let emails= users.map(user => user.email);
console.log(emails);
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.


let totalExp = users.reduce((totalYears, user) =>{
// let totalExp = users.reduce((accumulator, value) =>{
    // console.log("total from reduce", value); // gives each object
    // console.log(value.yearsOfExperience);
    return totalYears + user.yearsOfExperience;
},0);

console.log(totalExp);

console.log(totalExp/users.length);
//     Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((userLongestEmail, user) => {
    if(userLongestEmail.length < user.email.length){
        userLongestEmail = user.email;
    }
    return userLongestEmail;

},"");
console.log(longestEmail);

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let listOfInstructors = users.reduce((instructors,user,index) => {
    console.log(user.name);

    if (index < users.length - 1){
        return instructors += user.name + ", ";
    } else{
        return instructors += user.name + ".";
    }

},'Your instructors are: ');

console.log(listOfInstructors);

const allLanguages = users.reduce((languages, user) => {
    user.languages.forEach((language) => {
        if(!languages.includes(language)) {
            languages.push(language)
        }
});
return languages;
},[]);
console.log(allLanguages);