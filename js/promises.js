"use strict";

console.log('this is a test');

// let username = 'nayokim';

// function mostRecentCommit(username) {
//     let url = `https://api.github.com/users/${username}/events/public`;
//     return fetch(url, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
//         .then(response => response.json()
//             .then(data =>(data[0].created_at)
//                 // console.log(data)(data[0].created_at);
//             )
//         ).catch(error => console.log(error));
// }
function mostRecentCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
        .then(response => response.json()
            .then(listOfEvents=>{
                for (let event of listOfEvents){
                    if (event.type === 'PushEvent'){
                        return event.created_at;
                    }
                }
            }
                // console.log(data)(data[0].created_at);
            )
        )
        .catch(error => console.log(error));
}

mostRecentCommit('nayokim')
    .then(lastCommitDate => console.log('lastCommitDate', lastCommitDate));

mostRecentCommit('nayokim')
    .then(lastCommitDate => document.body.innerHTML= `${lastCommitDate} lastCommitDate`);


//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
// function wait(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, number);
//     })
// }

const wait = miliseconds => {
  return new Promise((resolved,reject) => {
      setTimeout( () => {
          resolved(miliseconds);
      },miliseconds);
    });
};

wait(1000).then((ms) => console.log(`You\'ll see this after ${ms/1000} second`));
wait(3000).then((ms) => console.log(`You\'ll see this after ${ms/1000} second`));
wait(4000).then((ms) => console.log(`You\'ll see this after ${ms/1000} second`));
wait(5000).then((ms) => console.log(`You\'ll see this after ${ms/1000} seconds`));

