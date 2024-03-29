//BASICS
//const isUserLoggedIn = true

if(2 === "2"){
    console.log("executed");
}
if("2" === "2"){ //Here we will get the output bcoz 2 is equal to 2 but here it's datatype is not equal, so the command will execute 
    console.log("executed");
}

//comparison operators:
//<, >, <=, >=, ==, !=, ===, !==
//=== -> also checks the datatype; same for !==

// --------------------
const score = 200

if(score > 100){
    const power = "Fly"
    console.log(`User Power: ${power}`);
    var power2 = "Archery"
    console.log(`User Power: ${power2}`);
}

// console.log(`User Power: ${power}`); //Here we won't get any output bcoz we define the power variable inside the curly braces with `const` and const & let have block level scope 
console.log(`User Power: ${power2}`); //Here we will get output bcoz we have defined the variable with `var` instead of const & let and `var` has global scope*/

// -------------------------------------------------------

// [1] SHORT-HAND NOTATION
//1.1
const balance = 1000
if (balance > 500) console.log(`test`); //1)Here we skip the curly braces -> so it's IMPLICIT SCOPE- means we have assumed that there is a scope | 2)but we have to insert SEMI-COLON(necessarily) also bcoz it's one line, so to tell that our scope has been ended

//1.2
//WE CAN ALSO WRITE MULTI-LINES WITH IMPLICIT SCOPE(i.e. without inserting CURLY BRACES, using COMMAS)
if (balance > 500) console.log(`test`),
console.log(`test2`), console.log(`test3`); //NOT RECOMMENDED bcoz very UNREADABLE CODE & also AMATEUR type */

// -------------------------------------------------------

// [2] MULTIPLE-CONDITIONS

const bal = 1000
if (bal < 500) {
    console.log(`less than 500`);
}else if (bal < 750) {
    console.log(`less than 750`);
}else if (bal < 900) {
    console.log(`less than 900`);
}else {
    console.log(`less than 1200`);
}

// -------------------------------------------------------

// [3] AND(&&), OR(||)

const userLoggenIn = true
const debitCard = true
const loggedInFromGoogle = false
const loogedInFromEmail = true

if (userLoggenIn && debitCard && 2==2) { //in AND cond'n all conditions must be true in order to get the desired output
    console.log(`Allow to buy course`);
}

if (loggedInFromGoogle || loogedInFromEmail) { //in OR cond'n any one condition must be true in order to get the desired output
    console.log(`User logged in`);
}