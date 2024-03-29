//DATA-TYPES
// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

/*const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

console.table([score, scoreValue, isLoggedIn, outsideTemp, userEmail]);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 165654666465164616n 
console.log(bigNumber)

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Bhavesh",
    age: 15
}
const myFunction = function(x){
    console.log("Hello World");
    return x+x;
}

console.log(typeof abc);*/

// +++++++++++++++++++++++++++++++++++++++++++++++ STACK & HEAP

// Stack (Primitive), Heap (Non-Primitive)

/*let myName = "bhavesh@gmail.com"
                                           
let anotherName = myName
anotherName = "chaiaurcode"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: 'user@gmial.com',
    upi: 'user@ybl'
}

let userTwo = userOne

userTwo.email = 'bhavesht@gmailll.com'

console.log(userOne.email);
console.log(userTwo.email);*/
// **********************************************

// +++++++++++++++++++++++++++++++++++++++++++++++ STRINGS
const name = "Bhavesh";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

let gameName = new String('bhavesh-bt')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); //GIVES THE LENGTH OF THE STRING 
console.log(gameName.toUpperCase()); //CONVERTS THE STRING TO UPPERCASE
console.log(gameName.charAt(2)); //GIVES THE CHARACTER AT THE PROVIDED INDEX 
console.log(gameName.indexOf('a')); //TELLS THE INDEX OF THE CHARACTER 

const newString = gameName.substring(0,8) //count characters and print them from the starting index (0) and (-1) to the end index NOT TAKES NEGATIVE VALUES & IF WE GIVE THEN ALSO COUNT FROM 0
console.log(newString);

const anotherString = gameName.slice(-5,8) //same as substring but also TAKES NEGATIVE VALUES & THEN COUNT FROM BACKWARDS
console.log(anotherString);

const newStringOne = "   bhavesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); //REMOVE EXTRA SPACES (WHITE SPACES) & THERE ARE ALSO TRIM-START & TRIM-END

const url = "https://bhavesh.com/bhavesh%20thadhani"
console.log(url.replace('%20', '-'));

console.log(url.includes('bhavesh')); //RETURNS TRUE OR FALSE

gameName = 'bhavesh-bt-com' //JUST UPDATING THE VALUE 
console.log(gameName.split('-')); //CONVERTS INTO ARRAY */






