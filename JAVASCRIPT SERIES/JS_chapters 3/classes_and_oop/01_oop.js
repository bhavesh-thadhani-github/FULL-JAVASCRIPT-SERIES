const user = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details from database');
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
    //this keyword  is used for current context
}

console.log(user.username);
user.getUserDetails();
console.log(this);  //window object. current & global context has so many values

// const promiseOne = new Promise()    //new keyword is a constructor function(you can make multiple instances with a single object, memory space gets save)
// const date = new Date()
//there are some cases in which we want a new instance instead without affecting old values
//new keyword helps in creating new context & we call it as constructor function

function User(username, loginCount, isLoggenIn){
    this.username = username    //here the left hand side value(this.username) is our variable while right-hand side value(username) is argument(the value that we 'll pass)
    this.loginCount = loginCount
    this.isLoggenIn = isLoggenIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this //object is passed on   //this line is implicitly predefined, so by not writing this nothing 'll happen
    //this is an object so bcoz of it we can enter different values to it
}

const userOne = new User('hitesh', 12, true)
const userTwo = new User('ChaiaurCode', 11, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne instanceof User);   //true 
console.log(userOne.constructor());   //constructor property is the reference of its function

//1] when you use new keyword the first thing happens is an empty object gets created, to which we call instance
//whenever we write this, a new empty(curly braces) object gets created each time
//2] a constructor function gets call bcoz of new keyword
//3] this keyword injects the argument(whatever you write) 
//4] you get the values in function




