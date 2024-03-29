// THIS KEYWORD & ARROW FUNCTIONS

const user = {
    username: "Bhavesh",
    price: 999,

    welcomeMessage: function(){
        console.log(this);
        console.log(`${this.username} , welcome to website`); // We use `this` keyword to refer to the current context; for example, here we use `this` with the username property which belongs to this current object only; so when we have to refer to the current context we use `this` keyword
    }
}

user.welcomeMessage() //Here we have to give paranthese bcoz we are calling a function; if not give paranthese, then we won't get any output

user.username = "sam" //Here we have changed the context(value), sam is context 
user.welcomeMessage() //So, here new context(value) 'll be printed
console.log(this);

/*function chai() {
    let username = "Bhavesh"
    console.log(this.username); //Output 'll be undefined bcoz `this` keyword only works in OBJECT
}
chai()*/

// ------------------------ARROW FUNCTIONS-----------------

//(1) One way of defining function:-
/*const chai = function (){
    let username = "Bhavesh"
    console.log(this.username); //Output 'll be undefined bcoz `this` keyword only works in OBJECT
}
chai()*/

//(2) Another way of defining functions(ARROW FUNCTIONS):-
/*const chai = () => {
    let username = "Bhavesh"
    console.log(this.username);
}
chai()*/
//2.1
/*const addTwo = (num1, num2) =>{
    return num1 + num2
}
console.log(addTwo(3,4));*/

//IMPLICIT RETURN
let addTwo = (num1, num2) => num1 + num2 //If we want to write a single statement then we can ignore curly braces and only write it after arrow in that line only & we also ignore `return` keyword
console.log(addTwo(3,4));
//OR 
addTwo = (num1, num2) => (num1 + num2) //We can also write it inside parantheses to not get confused (SUGGESTED)
console.log(addTwo(3,4));

//We should use & prefer for parantheses in implicit return bcoz:-
// If we have to use object inside an arrow function with implicit return then,
addTwo = (num1,num2) => ({username:'Bhavesh'})
console.log(addTwo(3,4))








