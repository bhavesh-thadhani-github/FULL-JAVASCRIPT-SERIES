//REDUCE
//The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function 
//on each element of the array.
const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},0) //Here 0 is the accumulator, which gets updated every time
console.log(myTotal);

//with arrow function
const myTotal2 = myNums.reduce( (acc,currval) => acc+currval,5) //Here 5 is the accumulator, we can also define the accumulator before
console.log(myTotal2);

//predefined accumulator
const initialValue = 5 //Here initialValue(5) is accumulator
const myTotal3 = myNums.reduce( (accumulator,currentValue) => accumulator+currentValue, initialValue)
console.log(myTotal3);

//EXERCISE
const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'mobile dev. course',
        price: 7999
    },
    {
        itemName: 'data science course',
        price: 12999
    },
]
const additionalCost = 500 //Here we add additionalCost as an accumulator to the shoppingCart 
const priceToPay = shoppingCart.reduce( (acc, item) => acc+item.price, additionalCost)
console.log(priceToPay);