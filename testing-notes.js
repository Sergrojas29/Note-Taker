// const data = require('./db/db.json')
// const fs = require('fs')

// async function start() {
//   const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//   const result = await data.json()
//   console.log(result.properties.periods[1].shortForecast);
// }

// function greeting() {
//   console.log("hello");
//   return "hello"
// }

// async function start() {
//   const data = await setTimeout(greeting, 3000)
//   console.log(data);
//   const result = await "Second Hello"
//   console.log(result);
// }



// start()




// fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//   .then(function (response) {
//     // console.log([response]);
//     return response.json();
//   })
//   .then(function(data){
//     console.log("got");
//   }
//   )

// const posts = [{ title: "post One", body: "this is post one" }, { title: "post Two", body: "this is post two" }];

// function getPosts() {
//   setTimeout(() => {
//     let output = ''
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}: ${post.body}</li>`;
//     })
//     document.body.innerHTML = output
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const error = true
//       !error ? resolve() : reject('error: Something went wrong')
//     }, 2000);

//   })

// }


// createPost({ title: 'Post Three', body: 'this is post three' }).then(getPosts).catch(err => console.log(err))


// getPosts()

function makeRequest(location) {
  return new Promise((resolve, reject) => {
      console.log(`Make Request to ${location}`);

      location === 'Google' ?
          resolve('Google Says hi') :
          reject('We can only talk to Google')
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
      console.log('Processing Response');
      resolve(`Extra info + ${response}`)
  })
}


// makeRequest('Google').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processResonse => {
//     console.log(processResonse)
// }).catch(err => {
//     console.log(err);
// })


async function dowork(){
  try{
      const response = await makeRequest('Google');
      console.log('Response Recieved');
      const processResponse = await processRequest(response)
      console.log(processResponse);
           
  } catch (err) {
      console.log(err);
  }
}


dowork()