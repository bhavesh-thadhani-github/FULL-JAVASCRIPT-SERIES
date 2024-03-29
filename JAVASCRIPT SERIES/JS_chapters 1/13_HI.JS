const first = (num1, num2) =>{
    return num1 * num2
}

console.log(first(5,9));

const second = (num_x) => {
    return num_x = num_x + 1;
}
console.log(second(5));

const third = greet => console.log(`Hi, ${greet}!`); //if we want to pass only one argument(here greet)to the arrow function then we don't need to pass it using parantheses; we can avoid parantheses in this case
third("Bhavesh")

// ----------------------------

const array = [2,3,4,5,6]

function multiplyByTwo(number){
    return number*2;
}

let multipliedNumbers = array.map(multiplyByTwo)
console.log(multipliedNumbers);

const multiplyByThree = number2 => number2*3 //here function is written as in the format of line 12

const result = array.map(multiplyByThree)
console.log(result);

const divideByTwo = number => number/2
console.log(divideByTwo(85));


