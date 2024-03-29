// NEW VIDEO
// JAVASCRIPT has protoypal behaviour means it does not give up easily, if it does not find the thing for which we asked it, then it go more layers up, access it parents, grandparents etc.
// until & unless it get 'null' value
// Bcoz of this prototypal behaviour it has access of 'this' keyword
// Arrow functions do not have access of 'this' keyword bcoz of its prototypal behaviour
// Bcoz of prototype we have classes, this, new, inheritance
// At the end of the day everything is OBJECT in Javascript including functions & arrays.
// Object has no parent

// excalidraw**
// The properties that is available to object is also available to objects and strings
// Functions are functions also & Objects also(we can behave a function like an object)
// Object is end. Prototype of object is null
// Below Notes**
// Javascript classes does not give construction functions through classes, it gives constructor function through 'new' keyword


function multiplyBy5(num){
    this.num = num
    return num*5
}


multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);     //prototype not only just gives methods it also gives some properties
// ------------------------------------

function createUser(username, score){
    this.username = username
    this.score = score
}

// 1) a new prototype function(increment) which increases the value (of current context) 
createUser.prototype.increment = function(){
    this.score++    //this matlab jisne bhi bulaya hai use pass chale jao aur uska increment kardo
}

// 2) another prototype function(printMe) which prints the value (of current context)
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);      //kiska score badau -> jisne bhi bulaya hai matlab this uska score print karva do  //jisne bhi score pucha hai uska score bada do
}
const chai = new createUser('chai', 25)     //new keyword is very important
const tea = createUser('tea', 250)

// myArray.prototype.map()     // we don't use/write prototype again & again bcoz JS inserts the prototype behind the scene(syntactical sugar)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/




