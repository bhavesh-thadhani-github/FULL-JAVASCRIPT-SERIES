// ... operator
function calculateCartPrice(val1, val2, ...num1){ //... is a rest operator, also called spread operator | name can differ according to use
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));
// -----------------------------------

//Using an Object with a Function
const user = {
    username: "Bhavesh",
    price: 199
}

function handleObject(anyobject){ //calling an object inside a function | For calling define a parameter and in that parameter using dot operator call the property of the object you want to access but while calling the function you have to give the object's name you want to call.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({  //You can also pass the whole object separately instead of just giving the name
    username: "Bhavesh",
    price: 399
}
)
// --------------------------------------

//Using an Array with a Function
const arr = [200, 300, 4570, 265, 854]

function myNewArray(getArray){
    console.log(getArray[2]); 
}

myNewArray(arr)

myNewArray([
    400,670,5840
]
)
// ---------------------------------------