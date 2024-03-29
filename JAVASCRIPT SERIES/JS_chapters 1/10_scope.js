//SCOPES

//1ST PART
/*let a = 100
const b = 200
var c = 300

//BLOCK SCOPE 
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(a); //Here 10 ll'be printed bcoz we declared variable a inside this(conditional) block only 
}
console.log(a); //Here 100(global variable) will be printed instead of 10 bcoz let has block level scope only so that variable a which is declared inside the conditional block will be accessible to that block only
console.log(b); //SAME SCOPE AS LET - Here 200(global variable) will be printed instead of 20 bcoz const has block level scope only so that variable b which is declared inside the conditional block will be accessible to that block only
console.log(c); //OPPOSITE OF LET - Here 30(block variable) will be printed instead of 300(global) bcoz var has global scope & also block level scope so it's value has been updated

/* 
LET - BLOCK LEVEL SCOPE
CONST - BLOCK LEVEL SCOPE
VAR - GLOBAL SCOPE
*/ 

// --------------------------------------------------------
//2ND PART

// 1.
/* function one() {
    const username = "Bhavesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    console.log(website); //(1) it 'll not execute bcoz const has block level scope & we have declared it inside function two but calling it outside that function(block scope) - PARENT CANNOT ACCESS(VARIABLE) FROM CHILD
    
    two() //(2) it 'll execute and "Bhavesh" 'll be printed, as inside this fucntion we're printing username variable & we have declared it outside that function so it's a parent & function two is a child - CHILD CAN ACCESS(VARIABLE) FROM PARENT
}

one() //executing function one */

// 2.
/*if (true) {
    const username = "Bhavesh"    

    if (username === "Bhavesh") {
        const website = " youtube"
        console.log(username + website); // 'll be PRINTED
    }

    console.log(website); // 'll NOT be PRINTED (ERROR)
}
console.log(username); // 'll NOT be PRINTED (ERROR)*/

// 3. ++++++++++++++++INTERESTING++++++++++++++++++++++
//[1] JUST DECLARATION
console.log(addOne(5)) //PRINTED bcoz we have just declared a function
function addOne(num) { 
    return num + 1;
}
//[2] DECLARATION + HOLDING IT IN A VARIABLE 
console.log(addTwo(5)) //NOT PRINTED bcoz we have hold that function inside a variable - concept of hoisting is applied 
const addTwo = function(num) { //This line is an Expression
    return num + 2;
}
