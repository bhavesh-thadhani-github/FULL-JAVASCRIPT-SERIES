const userEmail = 'b@bhavesh.ai' //Here we assumed that any value inside the string is TRUE but if the string don't has any value then it will be FALSE  

if (userEmail) { //inside the paranthese we don't use any comparison operator and also don't do any comparison but then also we get the output
    console.log('Got User Email');
} else{
    console.log(`Don't have User Email`);
}

//But if we have an EMPTY ARRAY then the value will be TRUTHY
const userEmailArray = []
if (userEmailArray) { 
    console.log('Got User Email');
} else{
    console.log(`Don't have User Email`);
}

// Falsy Values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN
// Except all these above values all are Truthy values

// Truthy Values
// "0", 'false', " ", [], {}, function(){}    <-- These all are truthy values but can confuse you
/*[] -> empty array
{} -> empty Object
function(){} -> empty function*/

//Empty Array
if (userEmailArray.length === 0){
    console.log('Array is Empty');
}

//Empty Object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is Empty`);
}

// Nullish Coalescing Operator (??) 
// checks that if there is null or undefined value then check it's safety(alternative)
// It's like a FALLBACK- How to handle the error or alternate value instead of null or undefined
let val1;
val1 = 5 ?? 10
console.log(val1); // 5 'll be printed | Vlue which comes FIRST will be assigned to that variable

val1 = null ?? 10
console.log(val1); // 10 'll be printed | instead of null, alternative of null is 10 here so 10 is printed

val1 = undefined ?? 15
console.log(val1); // 15 'll be printed | same above reason

val1 = null ?? 20 ?? 25
console.log(val1); //Here 20 'll be printed 

// ----------------------------------------------

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log(`more than 80`) : console.log(`less than 80`);

