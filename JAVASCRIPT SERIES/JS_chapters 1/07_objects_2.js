
//SINGLTON OBJECT - CONSTRUCTOR
/*const tinderUser1 = new Object() //1st way of defining an object
console.log(tinderUser1);*/

//NON-SINGLETON OBJECT - LITERAL
/*const tinderUser = {} //2nd way of defining an object
console.log(tinderUser);*/

//OUTPUT OF BOTH WILL BE SAME(EMPTY IN THIS CASE) FOR ABOVE CODE --^

//(1) NESTING
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userName:{
            firstName: "Bhavesh",
            lastName: "Thadhani"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userName);
console.log(regularUser.fullName.userName.firstName);



//(2) MERGING & CONCATENATING WITH ASSIGN & SPREAD(...) OPERATOR
const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}

const obj3 = {obj1,obj2} //By using this syntax we will get object 1 & 2 inside object 3
console.log(obj3);

//IMP- Here(obj4) we are NOT using parantheses with Object assign, so the target will be obj1(the object in which all the other object & values ll'be merged or assigned).
// The first value which we give in Object.assign will be treated as target and after that 1st value, all other values ll'be treated as source(that means all that source values or objects will be assigned inside target object)
//So in obj4 we pass 1st argument obj1 so it ll'be treated as target
//But in obj5 we pass 1st argument to parantheses so they ll'be treated as target and in that paranthese all other objects or values ll'be stored
//It's better to use parantheses 
const obj4 = Object.assign(obj1,obj2) //Both the object will be merged into single object 
console.log(obj4);
console.log(obj4 === obj1); //TRUE - bcoz target(obj1) and returned value(obj4) are same

//Here we are using parantheses with Object assign
const obj5 = Object.assign({},obj1,obj2) //Both the object will be merged into single object 
console.log(obj5);
console.log(obj5 === obj1); //FALSE - target({}) and returned value(obj4) are not same bcoz paranthese are the target here

const obj6 = {...obj1, ...obj2} // ... is spread operator | Use 90% of the time bcoz it's latest
console.log(obj6);

//(3) OBJECTS INSIDE ARRAY
const users = [
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 2,
        email: "c@gmail.com"
    }
]
console.log(users[1]);
console.log(users[1].email);

//(4) OBJECT PROPERTIES :
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //VVI- YOU WILL USE IT MANY TIMES | CONVERTS THE KEYS OF AN OBJECT TO ARRAY
console.log(Object.values(tinderUser)); //CONVERTS THE VALUES OF AN OBJECT TO ARRAY
console.log(Object.entries(tinderUser)); // RARELY USED | CONVERTS A SINGLE KEY-VALUE PAIR TO AN ARRAY, ANOTHER KEY-VALUE PAIR TO ANOTHER(2ND) ARRAY

console.log(tinderUser.hasOwnProperty('name')); //CHECKS WHETHER THE GIVEN PROPERTY(KEY) EXISTS IN AN ARRAY OR NOT
