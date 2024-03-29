//singleton
// Object.create - creating object using CONSTRUCTOR method (singleton concept is applied)

// Object literals

const mySym = Symbol("key1") //Defining a variable as Symbol datatype
//Before defining a Symbol datatype inside an object we have to define it in global space 

const JsUser = {
    name: "Bhavesh",
    age: 16,
    "fullName": "Bhavesh Thadhani", //Defining Key as a string
    location: "India",
    [mySym]: "mykey1", //Defining a Key as a Symbol(datatype)- for Symbol we have to always use square bracket notation & also we have to define it earlier as a variable | If we do not use Square brackets then it will be treated as string                        
    email: "bhavesh@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.location)
console.log(JsUser["email"]) //by using square notation we have to give value in string format. AT THE END OF THE DAY ALL THE KEYS INSIDE AN OBJECT ARE STORED AS A STRING
console.log(JsUser["fullName"])
console.log(JsUser[mySym]) 

//FREEZE
/*JsUser.email = "bhavesh@yahoo.com" 
Object.freeze(JsUser) //To Freeze an object i.e. to do not allow any changes in it
JsUser.email = "bhavesh@microsoft.com"
console.log(JsUser) //Will not changed, remain as yahoo.com only*/

//Using Fucntions inside an Object
/* 1 */ JsUser.greeting = function(){     //declaring a function inside an object with greeting name key(variable)
    console.log("Hello JS User");
}
console.log(JsUser.greeting());

/* 2 */ JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`) //Using THIS-to refer to the same object
}
console.log(JsUser.greetingTwo())

/* Notes - IMP
 1) Keys are originally stored as strings
 2) So to use them in square bracket notation we have to pass them as string
 3) We can't use Symbol & String datatype keys by dot notation
 4) Before defining a Symbol inside an object we have to define it globally
 5) For Symbol we don't have to pass as string in square bracket notation
 6) Square Bracket Notation is more effective
*/ 
