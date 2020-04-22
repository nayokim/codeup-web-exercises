"use strict";

console.log('this is a test');



let username = 'nayokim';
const githubPromise =  fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'GITHUB_KEY'}});

console.log(githubPromise);

githubPromise.then(response => response.json()
    .then(commits =>{
        // console.log(commits)
        console.log(commits[0].created_at);
    })
);



githubPromise.catch(error => console.log(error));

