
//DIFFERENCE B/W PUSH & CONCAT - IMP
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const myArray = ['rohit','virat','sachin']

marvel_heros.push(dc_heros) //LENGTH WILL BE 4 | MERGING ONE ARRAY INSIDE ANOTHER ARRAY BY USING PUSH METHOD

console.log(marvel_heros) //AND THEN PRINTING
console.log(marvel_heros[3][2]) //EXTRACTING 3rd ELEMENT(which is another array) FROM THE marvel_heros ARRAY & from that 3rd element we are extracting 2nd element
//MAIN POINT IS-: WE CAN ADD ANOTHER ARRAY(or any data type) INSIDE ONE ARRAY

const allHeros = marvel_heros.concat(dc_heros) //CONCAT - LENGTH WILL BE 7 | ADDING ALL THE INDIVIDUAL ELEMENTS INSIDE AN ARRAY
console.log(allHeros)

const allNewHeros = [...marvel_heros, ...dc_heros] //MORE PREFERED THAN CONCAT BCOZ WE CAN GIVE MANY VALUES IN THIS BUT NOT IN CONCAT  
console.log(allNewHeros) //SAME OUTPUT AS CONCAT 


//FLAT - TO SEPARATE VALUES OF DIFFERENT ARRAYS OR TO MERGE VALUES OF DIFFERENT ARRAYS INTO ONE ARRAY
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //FLAT - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
console.log(real_another_array) //ALL THE VALUES WILL BE ALL THE ARRAYS WILL BE COMBINED INTO 1 SINGLE ARRAY*/

//FROM, OF & ISARRAY
console.log(Array.isArray("Bhavesh")) //checks whether the provided value is an array(true) or not(false)
console.log(Array.from("Bhavesh")) //FROM - Converts the provided value into Array format
console.log(Array.from({name:"Bhavesh",age:16})) // INTERESTING-RESEARCH | can also converts objects and other datatypes | should use OF here instead of FROM

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //Same as FROM */