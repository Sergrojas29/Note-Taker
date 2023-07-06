//   const getNotes = () =>
//     fetch('/api/notes', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
  
// fetch('http://www.boredapi.com/api/activity/').then(
//     function(res) {
//     return console.log(res.json())
// })

// async function getSomething() {
//     response = await fetch('http://127.0.0.1:3000/api/notes')
//     data = await response.json()
//     console.log(data);
// }
// getSomething()

fetch('http://192.168.1.178:3000/api/notes')
  .then(function (response) {
    return response.json();
  })
  .then(function(data){
    console.log(data);
  }
  )