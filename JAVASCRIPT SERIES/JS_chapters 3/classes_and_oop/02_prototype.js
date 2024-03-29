let myName = 'hitesh     '
/*let mychannel = 'chai     '

console.log(myName.trim().length);  //one way of removing extra spaces & only counting written words (by ignoring whitespaces)
console.log(myName.trueLength()); */

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderpower: function(){
        console.log(`Spidy power is${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){       //we are declaring a new property(method) using Object.prototype so that all objects 'll have access to the newly created property
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh()
myHeros.hitesh()    //all arrays also have that created property bcoz end of the day all things(arrays, functions, strings) comes down to Objects or pass through Objects.
myName.hitesh()     //string also has access to it

Array.prototype.heyHitesh = function(){
    console.log('Hitesh says hello');
}

myHeros.heyHitesh()         //Array- has access to that created property
// heroPower.heyHitesh()    //Object- so not have that created property which was created for Arrays

/*let myObj = {
    userName: 'John',
    logInStatus: false,
    logInCount: 7
}

myObj.hitesh()*/


//  INHERITANCE
// The following is an old style code bcoz at that time there were no classes, so everything was made/created using Objects only
const User = {
    name: 'chai',
    email: 'chai@googl.com'
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport      //now TASupport object has access of TeachingSupport object. This is an old approach(syntax)
}

Teacher.__proto__ = User    //Teacher can access all the properties of User (This is what we call prototypal inheritance)
Object.setPrototypeOf(TeachingSupport, Teacher)     //TeachingSupport can access Properties of Teacher

//Do it practical
let anotherUsername = 'ChaiAurCode     '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
'hitesh   '.trueLength()
'iceTea'.trueLength()   //we can also pass hardcoded value










