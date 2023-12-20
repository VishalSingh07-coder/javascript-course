//Promises are used where async task are done
//like server request,cryptography etc.


//How to create promises

//using variable
const promiseOne=new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        console.log("hey Promise is here");
        
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise is Running");
})

//without Variable

new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        console.log("Promise 2 is here");
        resolve();
    },2000)
}).then(function()
{
    console.log("Hey Promise 2 is Running and is resolved");
})

//resolve with parameters
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:'Vishal',email:'vishalsingh2002@example.com'})
    }
    ,1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const Promisefour=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({name:'Vishal Singh',Password:123})
        }else{
            reject("Error:Some issues are occured ")
        }
    },1000)
})
// .then(function(myuser){
//     console.log(myuser);
//     return myuser.name
// })
// .then(function(name){
//     console.log(name);
// })
// .catch((error)=>{
//     console.log(error);
// })

// .finally(()=>{
//     console.log("promise makes chaning simple");
// })

// async function consumedPromisefour(){
//     try {
//        const response= await Promisefour
//        console.log(response);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumedPromisefour()

// async function getUserdata(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// getUserdata()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })