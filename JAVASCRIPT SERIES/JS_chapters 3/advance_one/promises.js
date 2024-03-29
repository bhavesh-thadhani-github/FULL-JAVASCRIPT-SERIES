// fetch('https://something.com').then().catch().finally()
// There are 2 parts of promieses
//  1) One is to Create the promises
//  2) And another is to consume them

//  1]With Variable
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()   //to connect the resolve and .then we write this line. You can also pass value to it. This line(means 'Promise consumed') will always execute afterwards
    },1000)
})

promiseOne.then(function(){     //.then has a direct connection with resolve. To connect the resolve and .then, see the above line
    console.log('Promise consumed');
})

//  2] Here we are creating a new Promise without variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){     // bcoz we not use any variable, we have to use .then. In the above case we were completing the same task in 2 parts, but here we are completing it as whole.
    console.log('Async 2 resolved');
})

//  3]Passing Arguments
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Chai', email: 'chai@example.com'})  //here we have passed the data in resolve, whatever parameter(data) we pass in resolve we get it in the user parameter, see down.
    }, 1000)                                                    //we can also pass Array or Function or Object to the resolve method
})

promiseThree.then(function(user){   //we use user bcoz to get the data(parameter) of resolve method
    console.log(user);
})

//  4]Using Try,Catch & Finally
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error  = false
        if(!error){
            resolve({username: 'hitesh', password: '123'})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username    // this value will be returned to the below .then function(concept of chaining). Very IMPORTANT & much Useful in Database Connection
}).then((username) => {     // Here the returned value 'll be obtained
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected ')          //finally always get executes like default(either the value is True or False)
)

//  5]Async & Await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false   //try both the values True & False here
        if(!error){
            resolve({username: 'javascript', password: '123'})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
//  we can also use async, await instead of then and catch. Used in DB Connections
//  it waits for the work & if it gets done then only it gets execute or else it 'll throw error

async function consumePromiseFive(){
    const response = await promiseFive  //we can use a new keyword 'await' whenever we use async & async does not use catch. Here value 'll come either in .then or .catch
    console.log(response);
}
consumePromiseFive()
//promise is an object, it's an eventual complete object but we don't use parantheses()
//async await has problem that they directly cannot handle the problem

//  6]Try & Catch
async function  consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);     //when you true the value of error above in promiseFive then this 'll execute but when we not use try and catch (above) then error does not get handled
    }
}
consumePromiseFive()

//  EXERCISE    [Using trycatch]
//  This whole code either using trycatch or then & catch 'll execute at first before the above code
/*async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json()  //we have to use await here bcoz it 'll take time to execute & if we don't use await here then it will not get execute
        console.log(data);
    } catch (error) {
        console.log('E: ', error);
    }
}

getAllUsers()*/

//  [Using then & catch]
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
