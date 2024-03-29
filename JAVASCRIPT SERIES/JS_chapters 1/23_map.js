const myNumbers = [1,2,3,4,5,6,7,8,9,10]

let newNums =  myNumbers.map( (num) => num + 20 )
console.log(newNums);

// Doing the same thing using forEach-output will be same
/*const emptyArr = [] 

const newNums2 = myNumbers.forEach( (num) => {
    emptyArr.push(num + 10)
} )
console.log(emptyArr);*/

//The difference between map () and filter ()?
//map returns a new array of elements where you have applied some function on the element so that it changes the original element (typically).
//filter returns a new array of the elements of the original array (with no change to the original values).
const newNums2 = myNumbers.filter( (num) => num + 20 ) //NOT DESIRED OUTPUT same array 'll be returned
console.log(newNums2);

const newNums3 = myNumbers.filter( (num) => num > 5) // true, here filter checks the condition
console.log(newNums3);

const newNums4 = myNumbers.map( (num) => num > 5) //NOT DESIRED OUTPUT
console.log(newNums4);

// ---------------------------------
//CHAINING

const newNumber = myNumbers
                    .map( (num) => num *10)
                    .map( (num) => num +1) // in this line updated num 'll come(array of above line)
                    .filter( (num) => num>=40 )
console.log(newNumber);

