/*const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI') //on which key(here 2nd parameter) we are giving the value. PI is the name of the property & its value is 3.14
console.log(descriptor);*/    //the value of PI is indetailed very hardcoded(using C++) that we cannot make it true or overwrite it 
// This type of property we can also define & use

/*console.log(Math.PI);   //value cannot be overwrite bcoz it's a constant
Math.PI = 5
console.log(Math.PI);*/

// const mynewObject = Object.create(null)
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log('chai nhi bni');
    }
}
console.log(Object.getOwnPropertyDescriptor(chai));     //in propertyDescriptor we have to tell that which property we want. Here chai is an object, so we 'll get undefined
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));     //(ObjectName, propertyName)

Object.defineProperty(chai, 'name', {
    //writable: false,        //we can also do configurable: false
    enumerable: false,      //means loop won't work on that given property
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

/*for (let [key,value] of chai) {
    console.log(`${key}: ${value}`);    //it's not iterable
}*/

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);    // name property 'll not get show
    }
}
//We use this above scenario when we have to make a property of an object non-iterable 






