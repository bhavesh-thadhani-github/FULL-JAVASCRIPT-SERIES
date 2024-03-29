//array

 //This file has been edited through another device of same github account
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);
const myHeros = ["ironman", "thor", "vision"]
const myArr2 = new Array(1,2,3,4) //ANOTHER WAY OF DEFINING ARRAYS
//console.log(myHeros[2]); //output -> vision */
//-----------------

//Array Methods
myArr.push("abc") //TO ADD ANOTHER ELEMENT TO AN ARRAY
console.log(myArr);
myArr.pop() //TO DELETE THE LAST ELEMENT FROM AN ARRAY: not have to give any argument 
console.log(myArr);

myArr.unshift("user") // ADD ANOTHER ELEMENT TO AN ARRAY BUT AT THE FIRST INDEX(works similiar like push)
console.log(myArr);
myArr.shift() //DELETE FIRST ELEMENT FROM AN ARRAY i.e. from the 1st index(works similiar like pop)
console.log(myArr); 
//---------------------

//More Methods
console.log(myArr.includes(9)); //GIVES ANSWER IN TRUE OR FALSE (BOOLEAN VALUE) [CHECKS THAT THE GIVEN VALUE EXIST OR NOT IN THE ARRAY]
console.log(myHeros.indexOf('thor')); //CHECKS THAT THE GIVEN VALUE IS PRESENT AT WHICH INDEX IN AN GIVEN ARRAY: WE HAVE TO GIVE ELEMENT AS AN ARGUMENT 
//---------------------

//Join Method
const newArr = myArr.join() //By using .join we get ouput of array elements in STRING datatype
console.log(myArr);
console.log(newArr); //ouput -> 0,1,2,3,4,5 
//--------------------

//Slice & Splice -IMP
console.log("A", myArr)
const myn1 = myArr.slice(1,3) //SLICE - only show indexs as mentioned but NOT INLUDE LAST RANGE (here 3)
console.log(myn1);
console.log("C1",myArr) //IMP- HERE WE GET THE VALUE OF FULL ORIGINAL ARRAY(FOR SLICE) i.e. we get full-[0,1,2,3,4,5]

console.log("");

console.log("B", myArr)
const myn2 = myArr.splice(1,3) //SPLICE - show values of indexes as mentioned but also INLUDE LAST RANGE
console.log(myn2);
console.log("C2",myArr) //IMP- HERE WE GET VALUES THAT WE NOT INCLUDED IN THE ARRAY(FOR SPLICE) i.e. we get- [0, 4, 5]*/
