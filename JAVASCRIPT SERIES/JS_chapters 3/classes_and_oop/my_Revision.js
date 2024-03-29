// 1]
/*function doSomethingAsync(callback){
    setTimeout(function(){
        console.log('Async operation completed.');
        callback()
    } ,3000)
}
function callbackFunction(){
    console.log('Callback function executed');
}
doSomethingAsync(callbackFunction)*/

// 2]
/*class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    doSomething(){
        console.log(`My name is ${this.name}`);
    }
}

const chai = new Person('chai', '88')
chai.doSomething()
console.log(typeof chai);
console.log(typeof Person);*/

function Person(name){
    this.name = name
}

Person.prototype.sayHello = function(){
    console.log(`Hello, my name is ${this.name}`);
}

const John = new Person('John')
John.sayHello()

const myHeros = {
    name: 'IronMan',
    power: 'suit',
    personality: 'smart'
}
const one = new Person(myHeros.name)
one.sayHello()
