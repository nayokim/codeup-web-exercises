"use strict";

console.log('this is a test');


// let username = 'nayokim';

function mostRecentCommit(username) {
    const githubPromise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'GITHUB_KEY'}});

    githubPromise.then(response => response.json()
        .then(commits => {
            // console.log(commits)
            console.log(commits[0].created_at);
        })
    );
    githubPromise.catch(error => console.log(error));
}

mostRecentCommit('nayokim');


//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

