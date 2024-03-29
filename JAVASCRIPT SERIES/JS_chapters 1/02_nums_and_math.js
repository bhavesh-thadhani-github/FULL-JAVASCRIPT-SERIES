const score = 400
console.log(score);

const balance = new Number(100)//CONVERT TO OBJECT TYPE WITH THE HELP OF NEW KEYWORD & WITH NUMBER CONVERT TO NUMBER DATATYPE, there are also string,booleans,etc.
console.log(balance);

console.log(balance.toString().length); //CONVERTS TO STRING AND ALSO CHECKS THE LENGTH OF THAT STRING; STARTS FROM 1 INSTEAD OF 0
console.log(balance.toFixed(1)); //APPLIES DECIMAL ACCORDING TO THE GIVEN INPUT

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(5)); //IF YOU ENTER 3 AS INPUT THEN IT WILL COUNT DIGITS FROM THE STARTING AND END TO THE 3RD DIGIT HERE AT 8(which is the 3rd digit) & ALSO ROUND OFF IT (if it's possible)!

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')); //INSERT COMMAS TO THE ZEROS OR DIGITS (BY DEFAULT IN AMERICAN FORMAT) TO CONVERT IT TO INDIAN-('en-IN')

console.table([Number.MAX_VALUE, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER]) //DIFFERENT VALUES FOR NUMBER(interesting)*/

// ++++++++++++++ MATHS ++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //ALWAYS CHANGES THE SIGN TO POSITIVE(from -ve also and from +ve also)
console.log(Math.round(4.6)); //ROUND OFF
console.log(Math.ceil(4.2)); //ROUND OFF TO UPPER VALUES ALWAYS
console.log(Math.floor(4.9)); //ROUND OFF TO LOWER VALUES ALWAYS
console.log(Math.min(4,3,6,8)); //FINDS THE MINIMUM VALUE FROM THE GIVEN VALUES 
console.log(Math.max(4,3,6,8)); //FINDS THE MAXIMUM VALUE FROM THE GIVEN VALUES */

console.log(Math.random()); //GIVES RANDOM VALUES FROM 0 TO 1
console.log((Math.random()*10) + 1); //BY MULTIPLYTING 10 WE GET A DIGIT FROM 0 TO 9 & DIGITS AFTER DECIMAL ALSO BUT NOW ALSO WE GET 0 SO TO AVOID IT WE ADD 1 ALSO
console.log(Math.floor(Math.random()*10) + 1); //NOW WE ADD FLOOR ALSO TO GET ROUND OFF AND WE ONLY GET SINGLE DIGIT, we can also add round or ceil also 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
