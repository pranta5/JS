// const promiseOne = new Promise(function(resolve,reject){
//     //Do a Async Task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log('promise consumed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task2 is complete');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('async 2 resolved');
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"pranta",email:"pranta@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({userName:'pranta_das'})
//         } else {
//             reject('Error')
//         }
//     },1000)
// })

// promiseFour.then(function(user){
//     console.log(user);
//     return user.userName
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log('either resolve or reject');
// })


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({userName:'p_das'})
//         } else {
//             reject('Error in promisefive')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()


// async function getuser(){
//     try {
//         const response = await fetch('https://api.github.com/users/pranta5')
//         const data = await response.json()      //string to json
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getuser()

fetch('https://api.github.com/users/pranta5').then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})