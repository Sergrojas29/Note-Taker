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